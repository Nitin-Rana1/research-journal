import { Alert, Box, Button, Divider, Modal, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./styles/SubmitRP.module.scss"
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { nanoid } from "nanoid";
import { setDoc, doc, DocumentData, onSnapshot, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, db, auth } from "../fireb/firebApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import Router from "next/router";
import { useRouter } from 'next/router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#17495f',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "white",
};

function SubmitRP() {
  const [rpTitle, setRpTitle] = useState("");
  const [file, setFile] = useState<null | File>(null);
  const [imgFile, setImgFile] = useState<null | File>(null);
  // const [coverImgUrl, setCoverImgUrl] = useState<null | string>(null);
  // const [uploadFileUrl, setUploadFileUrl] = useState<null | string>(null);
  const [previewImgUrl, setPreviewImgUrl] = useState<string | ArrayBuffer | null>(null);
  const [user, loading, error] = useAuthState(auth);
  const [userData, setuserData] = useState<DocumentData | null | undefined>(null);
  const [emptyField, setEmptyField] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileProgress, setFileProgress] = useState<number>(0);
  const [imgProgress, setImgProgress] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(doc(db, "authors", user!.uid), (doc) => {
        setuserData(doc.data());
        console.log(doc.data());
      });
    }
    // else if (!loading && !error) {
    //   router.push("/login-signup");
    // }
  }, []);

  const handleImgInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length != 0) {
      setImgFile(e.target.files[0]);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.addEventListener("load", function () {
        setPreviewImgUrl(this.result);
      });
    }
    setEmptyField(false);
  }
  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length != 0) {
      setFile(e.target.files[0]);
    }
    setEmptyField(false);
  }

  async function handleSubmit() {
    if (!file || !imgFile || rpTitle == "") {
      setEmptyField(true);
      return;
    }
    setSubmitting(true);
    setEmptyField(false);

    let uuid = nanoid();
    let authorWorkUuid = nanoid();

    let path = user!.uid + "/" + authorWorkUuid + "/" + uuid;
    const fileRef = ref(storage, path);
    // await uploadBytes(fileRef, file);
    // const urll = await getDownloadURL(fileRef);
    let imgFirebaseUrl = "i";
    let fileFirebaseUrl = "f";

    ///try
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        setFileProgress(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          fileFirebaseUrl = downloadURL;
        });
      }
    );

    ///try


    //cover image
    let uuid2 = nanoid();
    path = user!.uid + "/" + authorWorkUuid + "/" + uuid2;
    const imgRef = ref(storage, path);
    // await uploadBytes(imgRef, imgFile);
    // const urll2 = await getDownloadURL(imgRef);

    ///try2
    const uploadTask2 = uploadBytesResumable(imgRef, imgFile);
    uploadTask.on('state_changed',
      (snapshot) => {
        let progress2 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        setImgProgress(progress2);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload img is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('image available at', downloadURL);
          imgFirebaseUrl = downloadURL;
        });

        console.log("fb pe jara kya img", imgFirebaseUrl);
        console.log("fb pe jara kya file", fileFirebaseUrl);

        await setDoc(doc(db, "authorswork", authorWorkUuid), {
          title: rpTitle,
          fileUrl: fileFirebaseUrl,
          bookCover: imgFirebaseUrl,
          likes: 0,
          downloads: 0,
          createdAt: serverTimestamp(),
        });
        const authorsRef = doc(db, "authors", user!.uid);
        await updateDoc(authorsRef, {
          papersDocRefArr: arrayUnion(authorWorkUuid),
        });
        setSubmitting(false);
      }
    );
    ///updating firstore

  }
  if (loading) {
    return (
      <div className={styles.loadingScreen}>

        <Button variant="outlined">
          Loading.....
        </Button>

      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.errorScreen}>
        <Button variant="outlined">
          Sorry page down.....
        </Button>
      </div>
    );
  }

  if (user) {
    return (
      <main className={styles.main}>
        <div className={styles.modal}>
          <Modal
            open={submitting}
            onClose={() => { }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Uploading Files...
                <div>
                  Research Paper: {fileProgress}%
                </div>
                <div>
                  Cover Photo: {imgProgress}%
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Maybe this is starting of something big!!
              </Typography>
            </Box>
          </Modal>
        </div>
        <h3>Submit Your Paper</h3>
        <div className={styles.alert}>
          {emptyField && <Alert severity="error">Fill All The Fields</Alert>}
        </div>
        <div className={styles.row}>
          <span>Research Paper Title:</span>
          <TextField onChange={(e) => { setEmptyField(false); setRpTitle(e.currentTarget.value) }} id="outlined-basic" label="Paper Title" variant="outlined" value={rpTitle} />
        </div>
        <div className={styles.row}>
          <span>
            Paper&apos;s Cover Photo:
          </span>
          <Button variant="outlined" component="label" endIcon={<PictureAsPdfIcon />}>
            Paper Cover
            <input hidden accept="image/*" type="file" onChange={handleImgInput} />
          </Button>
        </div>
        <div className={styles.row}>
          <span>Reseach Paper:</span>
          <Button variant="outlined" component="label" endIcon={<PictureAsPdfIcon />}>
            Research Paper
            <input hidden accept=".pdf" type="file" onChange={handleFileInput} />
          </Button>
        </div>
        <div className={`${styles.row} ${styles.submitButton}`}>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
        <Divider>Preview Paper</Divider>
        <div className={styles.previewImgHolder}>
          <span>{rpTitle == "" ? "Your Paper Title" : rpTitle}</span>
          <div className={styles.previewImg}>
            {typeof previewImgUrl == 'string' ? <Image src={previewImgUrl} fill alt="Preview Image" />
              : <Image src="/logo.png" alt="Preview Image" fill />}
          </div>
        </div>
      </main>
    )
  }

}

export default SubmitRP;