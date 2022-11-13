import styles from "./styles/HomePageContent.module.scss"
import Button from '@mui/material/Button';
import AboutTheJournal from "./AboutUs/AboutTheJournal";

function HomePageContent({ handleSubmitPageButton }: any) {
  return (
    <main className={styles.mainSection}>
      <h1>Call For Work</h1>
      <div className={styles.buttonDiv}>
        <Button onClick={handleSubmitPageButton} variant="contained" sx={{ backgroundColor: "#082691", padding: "1em 3em" }}>Submit Journal</Button>
      </div>
      <AboutTheJournal />
      {/* <article className={styles.basicArticle}>
        <header className={styles.underlineHeading}>
          <p>Call For Paper</p>
          <div className={styles.bigLine} >
            <div></div>
          </div>

          <p> Volume 11 Issue 11, November 2022</p>
          <div className={styles.smallLine} >
            <div></div>
          </div>
        </header>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className={styles.buttonDiv}>
          <Button onClick={handleSubmitPageButton} variant="contained" sx={{ backgroundColor: "#082691", padding: "1em 3em" }}>Submit Research Journal</Button>
        </div>
        <p>
          <b>Article Types: </b>Research Paper, Survey Paper, Informative Article, Case Studies,
          Review Papers, Comparative Studies, Dissertation Chapters,
          Research Proposals or Synopsis, M.Tech / M.E / PhD Thesis, Photo
          Essay
        </p>
      </article> */}

    </main>
  )
}
export default HomePageContent;