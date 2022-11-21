import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, db } from "../fireb/firebApp";
import { useAuthState } from "react-firebase-hooks/auth";
//   import HomePage from "../component/homePage";
import { useState, useEffect } from "react";
import styles from "./styles/LoginOrSignUp.module.scss";
import { serverTimestamp, getDoc, doc, setDoc, DocumentData } from "firebase/firestore";
//   import { Button, ButtonGroup } from "@chakra-ui/react";
import { Button } from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import User from "./User";
import GoogleIcon from '@mui/icons-material/Google';

async function createDB(uid: string, name: string | null, email: string | null, photoURL: string | null) {
    try {
        await setDoc(doc(db, "authors", uid), {
            profilePic: photoURL,
            name: name,
            email: email,
            createdAt: serverTimestamp(),
            papersDocRefArr: [],
            totalViews: 0,
            totalLikes: 0,
            totalDownloads: 0,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
function LoginOrSignUp({ handleSubmitPageButton }: { handleSubmitPageButton: () => void }) {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setuserData] = useState<DocumentData | null>(null);
    async function logIn() {
        const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
        const authorRef = doc(db, "authors", userCred.user.uid);
        const docSnap = await getDoc(authorRef);
        if (docSnap.exists()) {
            setuserData(docSnap.data());
        } else {
            createDB(
                userCred.user.uid,
                userCred.user.displayName,
                userCred.user.email,
                userCred.user.photoURL
            );
        }
    }
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
    if (user) {
        return (
            <div>
                {/* <HomePage userUid={user.uid} /> */}
                <User handleSubmitPageButton={handleSubmitPageButton} />
            </div>
        );
    }
    return (
        <main className={styles.container1}>
            <div>
                <h1>Hi, submit your research papers by signing in first!!</h1>
                <Button variant="contained" className={styles.signInButton} onClick={logIn}><img src="/GoogleIcon.png" /> Continue With Google</Button>
            </div>
        </main>
    );
}
export default LoginOrSignUp;