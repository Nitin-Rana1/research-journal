import styles from "./styles/SubmitRP.module.scss"
function SubmitRP({handleHomePageButton}:any){
    return(
        <main className={styles.main}>
            <button onClick={handleHomePageButton}>Home Page</button>
            <input type="file" />
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
        </main>
    )
}
export default SubmitRP;