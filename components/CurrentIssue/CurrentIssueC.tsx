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
import { db } from "../../fireb/firebApp";
import BookCardCurrIssue from "../BookCardCurrIssue";
import styles from "./CurrentIssue.module.scss";

function CurrentIssueC() {
  const [booksData, setBooksData] = useState<DocumentData[]>([]);
  useEffect(() => {
    async function getData() {
      let temp: DocumentData[] = [];
      const q = query(collection(db, "authorswork"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        temp.push(doc.data());
        // console.log(doc.id, " => ", doc.data());
      });
      setBooksData(temp);
    }
    getData();
  }, []);
  return (
    <main className={styles.main}>
      <h1>Popular Research Papers</h1>
      {booksData.map((v, i) => {
        return (
          <article key={i}>
            <BookCardCurrIssue v={v} i={i} />
          </article>
        );
      })}
    </main>
  );
}
export default CurrentIssueC;
