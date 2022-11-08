import styles from "./styles/Footer.module.scss"
function Footer(){
    return(
        <footer className={styles.footer}>
        <article>
          <h3>Links</h3>
          <div className={styles.bigLine} >
            <div></div>
          </div>
          <p>Feedback</p>
          <p>Join Us</p>
          <p>Privacy Policy</p>
          <p >ROR Sitemap</p>
          <p>HTML Sitemap</p>
        </article>
        <article>
          <h3>Contact Us</h3>
          <div className={styles.bigLine} >
            <div></div>
          </div>
          <p>Graphic Era Hill University <br/>Dehradun Campus</p>
          <p><b>Email -</b> <br/>gehuInovationClub@gmail.com</p>
        </article>
        <article className={styles.f_connect}>
          <h3>Connect</h3>
          <div className={styles.bigLine} >
            <div></div>
          </div>
          <img src="/socialMediaIcons/linkedinB.png" alt="linkedIn" />
          <img src="/socialMediaIcons/facebookB.png" alt="facebook" />
          <img src="/socialMediaIcons/instagramB.png" alt="instagram" />
          <img src="/socialMediaIcons/twitterB.png" alt="twitter" />

        </article>
      </footer>
    )
}
export default Footer;