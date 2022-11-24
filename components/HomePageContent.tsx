import styles from "./styles/HomePageContent.module.scss"
import Button from '@mui/material/Button';
import AboutTheJournal from "./AboutUs/AboutTheJournal";

function HomePageContent({ handleSubmitPageButton }: any) {
  return (
    <main className={styles.mainSection}>
      <h1>Call For Work</h1>
      <div className={styles.buttonDiv}>
        <Button onClick={handleSubmitPageButton} variant="contained">
          Submit Journal</Button>
      </div>
      <AboutTheJournal />
    </main>
  )
}
export default HomePageContent;