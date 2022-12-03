import styles from "./styles/HomePageContent.module.scss"
import Button from '@mui/material/Button';
import AboutTheJournal from "./AboutUs/AboutTheJournal";
import Link from "next/link";
function HomePageContent({ handleSubmitPageButton }: any) {
  return (
    <main className={styles.mainSection}>
      <h1>Call For Work</h1>
      <div className={styles.buttonDiv}>
        <Link href = "/submit-paper">
        <Button onClick={handleSubmitPageButton} variant="contained">
          Submit Journal</Button>
        </Link>
      </div>
      <AboutTheJournal />
    </main>
  )
}
export default HomePageContent;