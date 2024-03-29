import { db, auth } from "../../fireb/firebApp";
import styles from "./styles/User.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayRemove,
  DocumentData,
} from "firebase/firestore";
import { Button } from "@mui/material";
import AuthorsWork from "./AuthorsWork";
import Image from "next/image";
import Link from "next/link";
import { User } from "firebase/auth";

// import { Button, ButtonGroup } from "@chakra-ui/react";

function UserProfile({
  user,
  loading,
  error,
}: {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
}) {
  const [userData, setuserData] = useState<DocumentData | null | undefined>(
    null
  );
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "authors", user!.uid), (doc) => {
      setuserData(doc.data());
    });
  }, []);
  if (loading) {
    return (
      <div className={styles.container2}>
        <Button variant="contained">Loading.....</Button>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.container2}>
        <Button variant="outlined">Sorry page down.....</Button>
      </div>
    );
  }
  if (user) {
    return (
      <main className={styles.main}>
        {userData && (
          <>
            <div className={styles.imgHolder}>
              <div className={styles.img}>
                <Image fill src={userData.profilePic} alt="profilepic" />
              </div>
            </div>
            <article className={styles.info}>
              <div>
                <b>Name: </b>
                {userData.name}
              </div>
              <div>
                <b>Email: </b> {userData.email}
              </div>
              <br />
              <div className={styles.submitButton}>
                <Link href="/submit-paper">
                  <Button variant="contained">Submit New Paper</Button>
                </Link>
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
            </article>
          </>
        )}
        {userData && (
          <AuthorsWork
            authorId={user!.uid}
            papersDocRefArrProp={userData!.papersDocRefArr}
          />
        )}
      </main>
    );
  } else {
    return <div></div>;
  }
}
export default UserProfile;
