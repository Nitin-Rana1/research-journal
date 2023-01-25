import {
  onSnapshot,
  doc,
  DocumentData,
  deleteDoc,
  arrayRemove,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { forwardRef, useEffect, useState } from "react";
import { db, storage } from "../../fireb/firebApp";
import styles from "./styles/User.module.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbUpSharp } from "@mui/icons-material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { deleteObject, getStorage, ref } from "firebase/storage";
import BookCard from "../BookCard";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AuthorsWork({
  authorId,
  papersDocRefArrProp,
}: {
  authorId: string;
  papersDocRefArrProp: string[];
}) {
  const [workDataArr, setWorkDataArr] = useState<DocumentData[]>([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function dataRetrive() {
      let temp = [];
      for (let i = 0; i < papersDocRefArrProp.length; i++) {
        const paperRef = doc(db, "authorswork", papersDocRefArrProp[i]);
        const docSnap = await getDoc(paperRef);
        if (docSnap.exists()) {
          temp.push({ ...docSnap.data(), paperId: docSnap.id });
        }
      }
      setWorkDataArr(temp);
    }
    dataRetrive();
  }, []);
  useEffect(() => {
    console.log("CHANGIN WORKDATA ARR", workDataArr);
  }, [workDataArr]);

  // function downloadThisUrl(fileUrl: string): void {
  //     console.log("donwload url", fileUrl);
  //     const xhr = new XMLHttpRequest();
  //     xhr.responseType = 'blob';
  //     xhr.onload = (event) => {
  //         const blob = xhr.response;
  //     };
  //     xhr.open('GET', fileUrl);
  //     xhr.send();
  // }
  async function handlePaperDelete(paperId: string) {
    //Database Deletes
    await deleteDoc(doc(db, "authorswork", paperId));
    const authorRef = doc(db, "authors", authorId);
    console.log(paperId);
    await updateDoc(authorRef, {
      papersDocRefArr: arrayRemove(paperId),
    });

    // Storage Deletes
    const fileRef = ref(storage, authorId + "/" + paperId + "/" + "file");
    deleteObject(fileRef)
      .then(() => {
        // File deleted successfully
        console.log("file delete success!");
      })
      .catch((error) => {
        console.log("file delete error!");
        // Uh-oh, an error occurred!
      });
    const imgRef = ref(storage, authorId + "/" + paperId + "/" + "image");
    deleteObject(imgRef)
      .then(() => {
        // File deleted successfully
        console.log("image delete success!");
      })
      .catch((error) => {
        console.log("image delete error!");
        // Uh-oh, an error occurred!
      });

    //Update local array data
    for (let i = 0; i < workDataArr.length; i++) {
      if (workDataArr[i]!.paperId == paperId) {
        let temp = workDataArr;
        temp.splice(i, 1);
        setWorkDataArr(temp);
      }
    }
  }
  // async function handleLike(paperId: string, oldLikes: number) {
  //     const paperRef = doc(db, "authorswork", paperId);
  //     await updateDoc(paperRef, {
  //         likes: oldLikes + 1
  //     });
  // }
  // async function handleDownload(paperId: string, oldDownloads: number) {
  //     const paperRef = doc(db, "authorswork", paperId);
  //     await updateDoc(paperRef, {
  //         downloads: oldDownloads + 1
  //     });
  // }
  return (
    <main className={styles.authorswork}>
      <h2>Total Papers: {workDataArr.length}</h2>
      {workDataArr.map((v, i) => {
        return (
          <article key={i}>
            <BookCard v={v} i={i} handleClickOpen={handleClickOpen} />
            <Divider />
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Are you sure to delete your paper?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Deleting the paper is irreversible. Your paper &quot;
                  {v.title}&quot; will be deleted permanently!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button
                  onClick={() => {
                    handleClose();
                    handlePaperDelete(v.paperId);
                  }}
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </article>
        );
      })}
    </main>
  );
}

export default AuthorsWork;
