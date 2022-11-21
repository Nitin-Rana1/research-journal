import { Button, TextField } from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./styles/SubmitRP.module.scss"
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { nanoid } from "nanoid";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { title } from "process";
import { storage, db, auth } from "../fireb/firebApp";
import { useAuthState } from "react-firebase-hooks/auth";

function SubmitRP({ handleloginOrSignUpButton }: { handleloginOrSignUpButton: () => void }) {
  const [rpTitle, setRpTitle] = useState("");
  const [file, setFile] = useState<null | File>(null);
  const [uploadFileUrl, setUploadFileUrl] = useState<null | string>(null);
  const [user, loading, error] = useAuthState(auth);
  const [loadTxt, setLoadTxt] = useState("nothing");

  const handleImgInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length != 0) {
      setFile(e.target.files[0]);
    }
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(e.target.files[0]);
    // fileReader.addEventListener("load", function () {
    //   setPrevImgUrl(this.result);
    // });
  }
  async function submit() {
    if (!file) return;
    setLoadTxt("Loading");
    let uuid = nanoid();
    setLoadTxt(uuid);
    const fileRef = ref(storage, uuid);
    setLoadTxt("reference created!");
    await uploadBytes(fileRef, file);
    setLoadTxt("img uploaded ");
    const urll = await getDownloadURL(fileRef);
    setLoadTxt("img url downloaded ");
    setUploadFileUrl(urll);
    await setDoc(doc(db, "plans", uuid), {
      title: title,
      fileUrl: uploadFileUrl,
    });
    setLoadTxt("data set!!");
    setLoadTxt("loading complete");
  }
  if (!user) {
    handleloginOrSignUpButton();
    return <div></div>
  } else {
    return (
      <main className={styles.main}>
        {loadTxt}
        <div>
          <TextField onChange={(e) => { setRpTitle(e.currentTarget.value) }} id="outlined-basic" label="Title" variant="outlined" value={rpTitle} focused />
        </div>
        <br />
        {/* <div>
        <TextField onChange={(e) => { setLink(e.currentTarget.value) }} id="outlined-basic" label="Google Drive Link" variant="outlined" value={link} />
      </div>
      <h5>OR</h5> */}
        <Button variant="contained" component="label" endIcon={<PictureAsPdfIcon />}>
          Upload
          <input hidden accept=".pdf" multiple type="file" onChange={handleImgInput} />
        </Button>
        <Button variant="contained" >Submit</Button>
      </main>
    )
  }
}
export default SubmitRP;