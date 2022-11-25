import { onSnapshot, doc, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../fireb/firebApp";
import styles from "./styles/User.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
function AuthorsWork({ authorId, papersDocRefArr }: { authorId: string, papersDocRefArr: string[] }) {
    const [workDataArr, setWorkDataArr] = useState<(DocumentData | undefined)[]>([]);
    const [showWork, setShowWork] = useState(false);
    console.log("authorWork0");

    useEffect(() => {
        console.log("authorWork1");
        // const unsub = onSnapshot(doc(db, "authors", authorId), (doc) => {
        //     // setuserData(doc.data());
        //     console.log("helo authorsWork");
        //     console.log(doc.data());
        // });
        for (let i = 0; i < papersDocRefArr.length; i++) {
            const unsub = onSnapshot(doc(db, "authorswork", papersDocRefArr[i]), (doc) => {
                setWorkDataArr([...workDataArr, doc.data()]);
            });
        }
        for (let i = 0; i < papersDocRefArr.length; i++) {
            console.log("ye hai", i, "----", workDataArr[i]);
        }
        setShowWork(true);

    }, []);

    function downloadThisUrl(fileUrl: string): void {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
        };
        xhr.open('GET', fileUrl);
        xhr.send();
    }

    return (<main className={styles.authorswork}>
        {workDataArr.length != 0 && workDataArr.map((v, i) => {
            return (
                <article key={i}>
                    <h3>{v!.title}</h3>
                    <div className={styles.bookCover}>
                        <img alt="book Cover" src={v!.bookCover} />
                    </div>
                    <div>Like:  {v!.likes}</div>
                    <div>Downloads: {v!.downloads}  </div>
                    <div>File Link: <a href={v!.fileUrl}>clik</a></div>
                    <Button onClick={() => downloadThisUrl(v!.fileUrl)} variant="contained">Download Paper</Button>

                </article>
            )
        })}
    </main>);
}

export default AuthorsWork;
