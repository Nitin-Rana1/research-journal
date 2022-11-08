import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';
import { padding } from '@mui/system';

const Home: NextPage = () => {
  
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo.png" />
        <h3 className={styles.headerTitle}>
          International Journal of Science and Journal
        </h3>
        <h5 className={styles.headerSubTitle}>
          Amet minim mollit non deserunt ullamco est sit Amet minim mollit non
          deserunt
        </h5>
      </header>
      <nav></nav>
      <main className={styles.main}>

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
            <Button variant="contained" sx={{backgroundColor: "#082691", padding:"1em 3em"}}>Submit Research Journal</Button>
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
        <aside className={styles.sidebar}>
          <article className={styles.search}>
            <h3>Search Article</h3>
            <div className={styles.bigLine} >
              <div></div>
            </div>
            <input></input>
          </article>
          <article>
            <h3>Member's Area</h3>
            <span>
              <ul>
                <li>Get Register</li>
                <li>Member Sign In</li>
              </ul>
            </span>
          </article>
        </aside>
      </main>

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
          <p>Graphic Era Hill University Dehradun Campus</p>
          <p><b>Email -</b>gehuInovationClub@gmail.com</p>
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
    </div>
    //     <div className={styles.groupDiv}>
    //       <div className={styles.frameDiv}>
    //         <div className={styles.rectangleDiv} />
    //         <img className={styles.frameIcon} alt="" src="../frame-3.svg" />
    //         <div className={styles.frameDiv1}>
    //           <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
    //           <div className={styles.internationalJournalOfScien}>
    //             International Journal of Science and Journal
    //           </div>
    //           <div className={styles.ametMinimMollitNonDeserunt}>
    //             Amet minim mollit non deserunt ullamco est sit Amet minim mollit non
    //             deserunt
    //           </div>
    //           <img className={styles.logoIcon} alt="" src="../logo.svg" />
    //         </div>
    //         <div className={styles.callForPaper}>Call For Paper</div>
    //         <div className={styles.volume11Issue11November2}>
    //           Volume 11 Issue 11, November 2022
    //         </div>
    //         <div className={styles.lineDiv} />
    //         <div className={styles.lineDiv1} />
    //         <div className={styles.ametMinimMollitNonDeserunt1}>
    //           <p className={styles.ametMinimMollit}>
    //             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //             sint. Velit officia consequat duis enim velit mollit. Exercitation
    //             veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
    //             ullamco est sit aliqua dolor do amet sint. Velit officia consequat
    //             duis enim velit mollit. Exercitation veniam consequat sunt nostrud
    //             amet.
    //           </p>
    //           <p className={styles.typeOfArticlesResearchPap}>
    //             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //             sint. Velit officia consequat duis enim velit mollit. Exercitation
    //             veniam consequat sunt nostrud amet.
    //           </p>
    //         </div>
    //         <div className={styles.submissionEmailEditorijsrn}>
    //           <p className={styles.ametMinimMollit}>
    //             <span
    //               className={styles.submissionEmail}
    //             >{`Submission Email: `}</span>
    //             <span>editor.ijsrnet[at]gmail.com</span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}>{`Article Publication: `}</span>
    //             <span className={styles.maximum3Days}>Maximum 3 Days</span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}>{`Accepted Language: `}</span>
    //             <span className={styles.maximum3Days}>English Only</span>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}>{`Areas Covered: `}</span>
    //             <span className={styles.maximum3Days}>Multidisciplinary</span>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}>{`Frequency: `}</span>
    //             <span>12 Issues Per Year</span>
    //           </p>
    //           <p className={styles.ametMinimMollit}>
    //             <span className={styles.span}></span>
    //           </p>
    //           <p className={styles.typeOfArticlesResearchPap}>
    //             <span className={styles.span}>{`Type of Articles: `}</span>
    //             <span>
                  // Research Paper, Survey Paper, Informative Article, Case Studies,
                  // Review Papers, Comparative Studies, Dissertation Chapters,
                  // Research Proposals or Synopsis, M.Tech / M.E / PhD Thesis, Photo
                  // Essay
    //             </span>
    //           </p>
    //         </div>
    //         <div className={styles.buttonsDiv}>
    //           <div className={styles.masterDiv}>
    //             <img
    //               className={styles.arrowLeftIcon}
    //               alt=""
    //               src="../arrowleft.svg"
    //             />
    //             <div className={styles.buttonDiv}>Email Manuscript</div>
    //             <img className={styles.arrowLeftIcon} alt="" />
    //           </div>
    //         </div>
    //         <div className={styles.frameDiv2}>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.frameDiv6}>
    //           <div className={styles.searchArticleDiv}>Search Article</div>
    //           <div className={styles.membersAreaDiv}>Member’s Area</div>
    //           <div className={styles.joinUsDiv}>Join Us</div>
    //           <div className={styles.quickAccessDiv}>Quick Access</div>
    //           <div className={styles.lineDiv4} />
    //           <div className={styles.lineDiv5} />
    //           <div className={styles.lineDiv6} />
    //           <div className={styles.lineDiv7} />
    //           <div className={styles.inputFieldsDiv}>
    //             <div className={styles.inputFieldsStates}>
    //               <div className={styles.masterDiv1}>
    //                 <div className={styles.labelDiv}>Label</div>
    //                 <div className={styles.frameDiv7}>
    //                   <div className={styles.frameDiv8}>
    //                     <img
    //                       className={styles.arrowLeftIcon}
    //                       alt=""
    //                       src="../arrowleft1.svg"
    //                     />
    //                     <div className={styles.placeholderDiv}>Search</div>
    //                   </div>
    //                   <img
    //                     className={styles.eyeOffIcon}
    //                     alt=""
    //                     src="../eyeoff.svg"
    //                   />
    //                 </div>
    //                 <div className={styles.labelDiv}>Hint text</div>
    //               </div>
    //             </div>
    //           </div>
    //           <img className={styles.searchIcon} alt="" src="../search.svg" />
    //           <div className={styles.frameDiv9}>
    //             <img
    //               className={styles.chevronRightIcon}
    //               alt=""
    //               src="../chevronright.svg"
    //             />
    //             <img
    //               className={styles.chevronRightIcon1}
    //               alt=""
    //               src="../chevronright.svg"
    //             />
    //             <div className={styles.getRegisterDiv}>Get Register</div>
    //             <div className={styles.memberSignIn}>Member Sign In</div>
    //           </div>
    //           <div className={styles.frameDiv10}>
    //             <img
    //               className={styles.chevronRightIcon}
    //               alt=""
    //               src="../chevronright.svg"
    //             />
    //             <img
    //               className={styles.chevronRightIcon1}
    //               alt=""
    //               src="../chevronright.svg"
    //             />
    //             <div className={styles.getRegisterDiv}>Get Register</div>
    //             <div className={styles.memberSignIn}>Member Sign In</div>
    //           </div>
    //           <div className={styles.frameDiv11}>
    //             <img className={styles.chevronRightIcon} alt="" />
    //             <img className={styles.chevronRightIcon1} alt="" />
    //             <div className={styles.getRegisterDiv}>Jane Cooper</div>
    //             <div className={styles.memberSignIn}>Esther Howard</div>
    //             <div className={styles.estherHowardDiv1}>Esther Howard</div>
    //             <div className={styles.guyHawkinsDiv}>Guy Hawkins</div>
    //             <div className={styles.codyFisherDiv}>Cody Fisher</div>
    //             <div className={styles.ralphEdwardsDiv}>Ralph Edwards</div>
    //             <div className={styles.leslieAlexanderDiv}>Leslie Alexander</div>
    //             <div className={styles.robertFoxDiv}>Robert Fox</div>
    //             <div className={styles.bessieCooperDiv}>Bessie Cooper</div>
    //             <div className={styles.memberSignIn2}>Member Sign In</div>
    //             <img className={styles.vectorIcon} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon1} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon3} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon4} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon5} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon6} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon7} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon8} alt="" src="../vector.svg" />
    //             <img className={styles.vectorIcon9} alt="" src="../vector.svg" />
    //           </div>
    //         </div>
    //         <div className={styles.indexingDiv}>Indexing</div>
    //         <div className={styles.lineDiv8} />
    //         <div className={styles.frameDiv12}>
    //           <img className={styles.chevronRightIcon} alt="" />
    //           <img className={styles.chevronRightIcon1} alt="" />
    //           <div className={styles.getRegisterDiv}>Jane Cooper</div>
    //           <div className={styles.memberSignIn}>Esther Howard</div>
    //           <div className={styles.estherHowardDiv1}>Esther Howard</div>
    //           <div className={styles.guyHawkinsDiv}>Guy Hawkins</div>
    //           <div className={styles.codyFisherDiv}>Cody Fisher</div>
    //           <div className={styles.ralphEdwardsDiv}>Ralph Edwards</div>
    //           <div className={styles.leslieAlexanderDiv}>Leslie Alexander</div>
    //           <div className={styles.robertFoxDiv}>Robert Fox</div>
    //           <div className={styles.bessieCooperDiv}>Bessie Cooper</div>
    //           <div className={styles.memberSignIn2}>Member Sign In</div>
    //           <img className={styles.vectorIcon} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon1} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon3} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon4} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon5} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon6} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon7} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon8} alt="" src="../vector.svg" />
    //           <img className={styles.vectorIcon9} alt="" src="../vector.svg" />
    //         </div>
    //         <div className={styles.frameDiv13}>
    //           <div className={styles.linksDiv}>Links</div>
    //           <div className={styles.contactUsDiv}>Contact Us</div>
    //           <div className={styles.connectDiv}>Connect</div>
    //           <div className={styles.lineDiv9} />
    //           <div className={styles.lineDiv10} />
    //           <div className={styles.lineDiv11} />
    //     <div className={styles.feedbackJoinUsPrivacyPolic}>
    //       <p className={styles.ametMinimMollit}>Feedback</p>
    //       <p className={styles.ametMinimMollit}>Join Us</p>
    //       <p className={styles.ametMinimMollit}>Privacy Policy</p>
    //       <p className={styles.ametMinimMollit}>ROR Sitemap</p>
    //       <p className={styles.typeOfArticlesResearchPap}>HTML Sitemap</p>
    //     </div>
    //     <div className={styles.thornridgeCirSyracuseConn}>
    //       2118 Thornridge Cir. Syracuse, Connecticut 35624
    //     </div>
    //     <div className={styles.thornridgeCirSyracuseConn1}>
    //       2118 Thornridge Cir. Syracuse, Connecticut 35624
    //     </div>
    //     <div className={styles.thornridgeCirSyracuseConn2}>
    //       2118 Thornridge Cir. Syracuse, Connecticut 35624
    //     </div>
    //     <div className={styles.desginedBySamayMaurya}>
    //       Desgined By Samay Maurya
    //     </div>
    //     <div className={styles.emailJacksongrahamexampleDiv}>
    //       <span className={styles.span}>Email -</span>
    //       <span className={styles.jacksongrahamexamplecomSpan}>
    //         jackson.graham@example.com
    //       </span>
    //     </div>
    //     <img className={styles.frameIcon1} alt="" src="../frame-27.svg" />
    //   </div>
    // </div>
    //     </div>
  )
}

export default Home
