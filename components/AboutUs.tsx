import styles from "./styles/AboutUs.module.scss";
function AboutUs() {
    return (
        <main className={styles.main}>
            <h3>
                ABOUT THE JOURNAL
            </h3>
            <p>
                - is an open access university level publishing journal that aims to provide and impart knowledge and encourage
                to explore the world of research and innovation. Writing a journal is a skill and Graphic Era Hill University journal of research and
                innovation provides the opportunity to students of Graphic Era Hill University to publish their research work and is a frame that allows
                efficient access to the reviewer. We strive to ensure novelty in each journal. It is a source that provides quality information about the
                recent researches and innovations provides the platform to the students of the university to grow and enhance the existing knowledge and to
                make new discoveries and inventions.
            </p>


            {/* Submission Email-emilgww@gmail.com
            Contacts-94XXXXXXX
            Language accepted-English
            mode of submission (Format)-Pdf/Google drive
            Publication Frequency- 12 per year
            Number of papers-3


            <h3>

                Journal Features
            </h3>
            <p className={styles.features}>
                {["The journal submitted should not be published before for any publication.", "It should be plagiarism free.", "it should focus on specific issues or problems.", "It should have unique DOI.", "It should be based upon extensive reading and extraction of information from several sources and origin.", "Extracted information should be from reliable sources."].map((value, index) => {
                    return (
                        <div><b>{index + 1}: </b>{value}</div>
                    )
                })}
            </p>


            CrossRef DOI

            IJERAT journal is a member of CrossRef since May 2018. All articles published from June 2018 have been allocated with Unique CrossRef DOI with DOI prefix: 10.31695/IJERAT.
            Footer
            © 2022 GitHub, Inc.
            Footer navigation
            Terms
            Privacy
            Security
            Status
            D */}
        </main>
    )
}
export default AboutUs;