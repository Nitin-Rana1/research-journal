import styles from "../styles/Home.module.scss";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbUpSharp } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function BookCardCurrIssue({ v, i }: { v: any; i: number }) {
  return (
    <section className={styles.authorswork}>
      <h3 className={styles.titleLine}>
        <span>
          {i + 1}. {v.title}{" "}
        </span>
        <span className={styles.authorName}>by {v.authorName}</span>
      </h3>
      <div className={styles.imgAndDesc}>
        <div className={styles.bookCover}>
          <Image src={v.bookCover} alt="book Cover" fill />
        </div>
        <div className={styles.desc}>{v.desc}</div>
      </div>
      <div className={styles.likeDownload}>
        <div>
          Like: {v.likes} <ThumbUpIcon />
        </div>
        <div>Downloads: {v.downloads} </div>
      </div>
      <div className={styles.deleteDownload}>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          <DeleteIcon sx={{ color: "red" }} />
        </Button> */}
        <a target="_blank" href={v.fileUrl} rel="noopener noreferrer">
          <Button variant="contained">Open Papers</Button>
        </a>
      </div>
    </section>
  );
}
