import {
  Alert,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./styles/SubmitRP.module.scss";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { nanoid } from "nanoid";
import {
  setDoc,
  doc,
  DocumentData,
  onSnapshot,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, db, auth } from "../fireb/firebApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import Config from "../config.js";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#17495f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
};

const amount = "2000";
const orderId = `Ord_${Date.now()}`;

function openJsCheckoutPopup(
  orderId: string,
  txnToken: string,
  amount: string
) {
  var config = {
    root: "",
    flow: "DEFAULT",
    data: {
      orderId: orderId,
      token: txnToken,
      tokenType: "TXN_TOKEN",
      amount: amount,
    },
    merchant: {
      redirect: true,
    },
    handler: {
      notifyMerchant: function (eventName: string, data: any) {
        console.log("notifyMerchant handler function called");
        console.log("eventName => ", eventName);
        console.log("data => ", data);
      },
    },
  };
  if (window.Paytm && window.Paytm.CheckoutJS) {
    // initialze configuration using init method
    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        // after successfully updating configuration, invoke checkoutjs
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error: any) {
        console.log("error => ", error);
      });
  }
}

function SubmitRP() {
  const [rpTitle, setRpTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<null | File>(null);
  const [imgFile, setImgFile] = useState<null | File>(null);
  const [previewImgUrl, setPreviewImgUrl] = useState<
    string | ArrayBuffer | null
  >(null);

  const [user, loading, error] = useAuthState(auth);
  const [userData, setuserData] = useState<DocumentData | null | undefined>(
    null
  );
  const [emptyField, setEmptyField] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [fileProgress, setFileProgress] = useState<number>(0);
  const [imgProgress, setImgProgress] = useState<number>(0);

  const router = useRouter();

  //submit button
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
  };
  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length != 0) {
      setFile(e.target.files[0]);
    }
    setEmptyField(false);
  };
  async function UploadFile() {
    if (!file) {
      return;
    }
    let authorWorkUuid = nanoid();
    //Path authorId then PaperId
    let path = user!.uid + "/" + authorWorkUuid + "/" + "file";
    const fileRef = ref(storage, path);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setFileProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      async () => {
        let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", downloadURL);
        UploadImg(authorWorkUuid, downloadURL);
      }
    );
  }
  async function UploadImg(authorWorkUuid: string, fileDownloadUrl: string) {
    if (!imgFile) {
      return;
    }
    //Path authorId then PaperId
    let path = user!.uid + "/" + authorWorkUuid + "/" + "image";
    const imgRef = ref(storage, path);

    const uploadTask = uploadBytesResumable(imgRef, imgFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setImgProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload img is running");
            break;
        }
      },
      (error) => {},
      async () => {
        let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        console.log("fb pe jara kya img", downloadURL);
        console.log("fb pe jara kya file", fileDownloadUrl);

        await setDoc(doc(db, "authorswork", authorWorkUuid), {
          authorName: userData!.name,
          title: rpTitle,
          desc: desc,
          fileUrl: fileDownloadUrl,
          bookCover: downloadURL,
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
  }
  async function handleSubmit() {
    if (!file || !imgFile || rpTitle == "" || desc == "") {
      setEmptyField(true);
      return;
    }

    setSubmitting(true);
    setEmptyField(false);
    UploadFile();
  }
  function handlePayPage() {
    if (!file || !imgFile || rpTitle == "" || desc == "") {
      setEmptyField(true);
      return;
    }
    setPayPage(true);
  }

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <Button variant="outlined">Loading.....</Button>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.errorScreen}>
        <Button variant="outlined">Sorry page down.....</Button>
      </div>
    );
  }

  if (!user) return <div></div>;

  async function PAY() {
    const paytmParams = await (
      await fetch(`/api/paytm-params?custId=${user?.uid}`)
    ).json();
    openJsCheckoutPopup(
      paytmParams.orderId,
      paytmParams.txnToken,
      paytmParams.amount
    );
  }
  return (
    <main className={styles.main}>
      <Script
        src={`https://${Config.ENV}/merchantpgpui/checkoutjs/merchants/${Config.MID}.js`}
      />
      <div className={styles.modal}>
        <Modal
          open={submitting}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Uploading Files...
              <div>Research Paper: {fileProgress}%</div>
              <div>Cover Photo: {imgProgress}%</div>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
      <article>
        <h3>Submit Your Paper</h3>
        <div className={styles.alert}>
          {emptyField && <Alert severity="error">Fill All The Fields</Alert>}
        </div>
        <div className={styles.row}>
          <span>Research Paper Title:</span>
          <TextField
            onChange={(e) => {
              setEmptyField(false);
              setRpTitle(e.currentTarget.value);
            }}
            id="outlined-basic"
            label="Paper Title"
            variant="outlined"
            value={rpTitle}
          />
        </div>
        <div className={styles.row}>
          <span>Paper Description:</span>
          <TextField
            onChange={(e) => {
              setEmptyField(false);
              setDesc(e.currentTarget.value);
            }}
            id="outlined-basic"
            label="Paper Description"
            variant="outlined"
            value={desc}
          />
        </div>
        <div className={styles.row}>
          <span>Paper&apos;s Cover Photo:</span>
          <Button
            variant="outlined"
            component="label"
            endIcon={<PictureAsPdfIcon />}
          >
            Paper Cover
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImgInput}
            />
          </Button>
        </div>
        <div className={styles.row}>
          <span>Reseach Paper:</span>
          <Button
            variant="outlined"
            component="label"
            endIcon={<PictureAsPdfIcon />}
          >
            Research Paper
            <input
              hidden
              accept=".pdf"
              type="file"
              onChange={handleFileInput}
            />
          </Button>
        </div>
        <div className={`${styles.row} ${styles.submitButton}`}>
          <Button variant="contained" onClick={handlePayPage}>
            Pay and Publish
          </Button>
        </div>
      </article>
      <Divider>Preview Paper</Divider>
      <div className={styles.previewImgHolder}>
        <span>{rpTitle == "" ? "Your Paper Title" : rpTitle}</span>
        <div className={styles.previewImg}>
          {typeof previewImgUrl == "string" ? (
            <Image src={previewImgUrl} fill alt="Preview Image" />
          ) : (
            <Image src="/logo.png" alt="Preview Image" fill />
          )}
        </div>
      </div>
    </main>
  );
}

export default SubmitRP;