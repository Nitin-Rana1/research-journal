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

async function createDB(uid: string, name: string|null, email: string|null, photoURL: string|null) {
    try {
        await setDoc(doc(db, "usersData", uid), {
            profilePic: photoURL,
            name: name,
            email: email,
            createdAt: serverTimestamp(),
            papers: 0,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
function LoginOrSignUp() {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setuserData] = useState<DocumentData | null>(null);
    async function logIn() {
        const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
        const docRef = doc(db, "usersData", userCred.user.uid);
        const docSnap = await getDoc(docRef);
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
                <p>
                    <span>
                        <img src='./icons/app_icon.png' alt='boy' />
                    </span>
                    <br />
                    <Button variant="contained">
                        Loading
                    </Button>
                </p>
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
                <User/>
            </div>
        );
    }
    return (
        <main className={styles.container1}>
            <div>
                <h1>Hi, submit your research papers by signing in first!!</h1>
            <Button variant = "contained" onClick={logIn}>Log In</Button>
            </div>
        </main>
    );
}
export default LoginOrSignUp;