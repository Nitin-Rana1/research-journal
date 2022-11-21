import { db, auth } from "../fireb/firebApp";
import styles from "./styles/User.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc, arrayRemove, DocumentData } from "firebase/firestore";
import { Button } from "@mui/material";
import Image from "next/image";
// import { Button, ButtonGroup } from "@chakra-ui/react";

function User({ handleSubmitPageButton }: { handleSubmitPageButton: () => void }) {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setuserData] = useState<DocumentData | null | undefined>(null);
    // const [workDataArr, setWorkDataArr] = useState<(DocumentData | undefined)[]>([]);
    // const [showWork, setShowWork] = useState(false);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "authors", user!.uid), (doc) => {
            setuserData(doc.data());
            console.log("helo suer");
            console.log(doc.data());
        });
        console.log("testing11");
        console.log("idhar hai ect");
        // if (userData) {
        // for (let i = 0; i < userData.papersDocRefArr.length; i++) {
        //     const unsub = onSnapshot(doc(db, "authorswork", userData.papersDocRefArr[i]), (doc) => {
        //         if (workDataArr) {
        //             let t = workDataArr;
        //             t.push(doc.data());
        //             setWorkDataArr(t);
        //         } else {
        //             setWorkDataArr([doc.data()]);
        //         }
        //         console.log("boy" + i, workDataArr);
        //     });
        // }
        // setShowWork(true);
        // }
    }, []);
    if (loading) {
        return (
            <div className={styles.container2}>

                <Button variant="contained">
                    Loading.....
                </Button>

            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Sorry :</p>
            </div>
        );
    }
    return (
        <main className={styles.main}>
            {userData && (
                <>
                    <div className={styles.imgHolder}>

                        {/* <Image fill src={userData.profilePic} alt='profilepic' /> */}
                        <img src={userData.profilePic} alt="profilePic" />
                    </div>
                    <article className={styles.info}>
                        <div>

                            <b>Name: </b>{user!.displayName}
                        </div>
                        <div>
                            <b>Email: </b> {user!.email}
                        </div>
                        <br />
                        <div className={styles.submitButton}>
                            <Button onClick={handleSubmitPageButton} variant="contained">Submit New Paper</Button>
                        </div>
                    </article>
                    <br />
                    <article>
                        <div>
                            <b>Research Papers: </b> {userData.papersDocRefArr.length}
                        </div>
                        <div>
                            <b>Total Views: </b> {userData.totalViews}
                        </div>
                        <div>
                            <b>Total likes: </b> {userData.totalLikes}
                        </div>
                        <div>
                            <b>Papers Downloads: </b> {userData.totalDownloads}
                        </div>
                        {/* <div>
                            <Button onClick={() => setShowWork(true)} variant="contained">Show my Work</Button>
                        </div> */}
                    </article>
                </>
            )
            }
            {/* <section className={styles.authorswork}> */}
            {/* {(workDataArr && workDataArr.length != 0) && (
                    
                )} */}
            {/* {workDataArr?.map((v, i) => {
                    console.log("hekk" + i);
                    return (
                        <div key={i}>
                            <div>{v!.title}</div>
                            <img src={v!.bookCover} alt="book Cover" />
                            <div>Downloads: {v.downloads}</div>
                            <div>Likes: {v!.likes}</div>
                            {/* <div>{v!.fileUrl}</div> */}
            {/* </div> */}

            {/* })} */}
            {/* </section> */}
        </main >
    );
}
export default User;