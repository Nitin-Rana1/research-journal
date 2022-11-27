import { onSnapshot, doc, DocumentData, deleteDoc, arrayRemove, updateDoc } from "firebase/firestore";
import { forwardRef, useEffect, useState } from "react";
import { db } from "../../fireb/firebApp";
import styles from "./styles/User.module.scss";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ThumbUpSharp } from "@mui/icons-material";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AuthorsWork({ authorId, papersDocRefArr }: { authorId: string, papersDocRefArr: string[] }) {
    const [workDataArr, setWorkDataArr] = useState<(DocumentData | undefined)[]>([]);
    useEffect(() => {
        for (let i = 0; i < papersDocRefArr.length; i++) {
            const unsub = onSnapshot(doc(db, "authorswork", papersDocRefArr[i]), (doc) => {
                setWorkDataArr([...workDataArr, doc.data()]);
            });
        }
    }, []);

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
        await deleteDoc(doc(db, "authorswork", paperId));
        const authorRef = doc(db, "authors", authorId);
        await updateDoc(authorRef, {
            papersDocRefArr: arrayRemove(paperId)
        });
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (<main className={styles.authorswork}>
        {workDataArr.length != 0 && workDataArr.map((v, i) => {
            return (
                <article key={i}>
                    {v &&
                        <>
                            <div>
                                <h3>{v.title}</h3>
                                <div className={styles.imgAndDesc}>
                                    <div className={styles.bookCover}>
                                        <Image src={v.bookCover} alt="book Cover" fill />
                                    </div>
                                    <div className={styles.desc}>{v.desc}</div>
                                </div>
                                <div className={styles.likeDownload}>
                                    <div>Like:  {v.likes} <ThumbUpIcon /></div>
                                    <div>Downloads: {v.downloads}  </div>
                                </div>
                                <div className={styles.deleteDownload}>

                                    <Button variant="outlined" onClick={handleClickOpen}><DeleteIcon sx={{ color: 'red' }} /></Button>
                                    <a target="_blank" href={v.fileUrl} rel="noopener noreferrer">
                                        <Button variant="contained">
                                            Open Papers
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <Divider />
                            <div>
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
                                            Deleting the paper is irreversible. Your paper "{v.title}" will be deleted permanently!
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Disagree</Button>
                                        <Button onClick={() => {
                                            handleClose();
                                            handlePaperDelete(papersDocRefArr[i])
                                        }}>Agree</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </>
                    }
                </article>
            )
        })}
    </main>);
}

export default AuthorsWork;
