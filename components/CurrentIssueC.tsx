import {
  collection,
  doc,
  DocumentData,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../fireb/firebApp";
import styles from "./styles/CurrentIssue.module.scss";
function CurrentIssueC() {
  const [issuesArr, setIssuesArr] = useState<(DocumentData | undefined)[]>([]);
  useEffect(() => {
    async function temp(){
        const q = query(collection(db, "authorswork"), orderBy("likes"), limit(3));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    } 
    temp();
  }, []);
  return (
    <main className={styles.main}>
      <h1>Current Issue Page C</h1>
    </main>
  );
}
export default CurrentIssueC;
