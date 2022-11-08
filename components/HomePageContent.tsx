import styles from "./styles/HomePageContent.module.scss"
import Button from '@mui/material/Button';

function HomePageContent({handleSubmitButton}: any){
    return(
        <section className={styles.mainSection}>
          <article className={styles.basicArticle}>
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
            <Button onClick={handleSubmitButton} variant="contained" sx={{backgroundColor: "#082691", padding:"1em 3em"}}>Submit Research Journal</Button>
            </div>
            <p>
              <b>Article Types: </b>Research Paper, Survey Paper, Informative Article, Case Studies,
                  Review Papers, Comparative Studies, Dissertation Chapters,
                  Research Proposals or Synopsis, M.Tech / M.E / PhD Thesis, Photo
                  Essay
            </p>
          </article>
          <article className={styles.basicArticle}>
            <header className={styles.underlineHeading}>
              <p>About Us</p>
              <div className={styles.bigLine} >
                <div></div>
              </div>
            </header>
            <p>
              This is an Open Access, Fully Refereed, and Double Blind
              Reviewed Journal. Being a Monthly International Online Journal,
              12 issues are published per year. International Journal of
              Science and Research (IJSR) also acts as a host for
              International and National Conferences to publish their research
              work.
            </p>
            <p>
              International Journal of Science and Research (IJSR) covers all
              disciplines, including Arts, Science, Commerce, Social-Sciences,
              Management, and Engineering. International Journal of Science
              and Research (IJSR) always strives to be a platform for
              Academicians, new Researchers, Authors, Engineers, Technocrats,
              and Engineering Scholars. Since its inception, International
              Journal of Science and Research (IJSR) is continuously
              publishing original and best-quality research articles.
            </p>
          </article>
        </section>
    )
}
export default HomePageContent;