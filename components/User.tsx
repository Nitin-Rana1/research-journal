import { db, auth } from "../fireb/firebApp";
import styles from "./styles/User.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc, arrayRemove, DocumentData } from "firebase/firestore";
// import { Button, ButtonGroup } from "@chakra-ui/react";

function User() {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setuserData] = useState<DocumentData | null | undefined>(null);
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "usersData", user!.uid), (doc) => {
            setuserData(doc.data());
        });
    }, []);
    return (
        <main className={styles.container}>
            {userData && (
                <>
                    <img src={userData.profilePic} alt='profilepic' />
                    <article className={styles.info}>
                        <div>

                        <b>Name: </b>{user!.displayName}
                        </div>
                        <div>
                        <b>Email: </b> {user!.email}
                        </div>
                    </article>
                </>
            )}
        </main>
    );
}
export default User;