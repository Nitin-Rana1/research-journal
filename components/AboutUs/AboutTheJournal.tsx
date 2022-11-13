import styles from "./AboutUs.module.scss";
function AboutTheJournal({ part }: any) {
    return (
        <main className={styles.aboutTheJournal}>
            <h3>
                ABOUT THE JOURNAL
            </h3>
            <p>
                Graphic Era Journal of Research and Innovation is an open access university level publishing journal that aims to provide and impart knowledge
                and encourages to explore the world of research and innovation. Writing a journal is a skill and Graphic Era Journal of Research and Innovation provides the
                opportunity to the students of Graphic Era Hill University to publish their research work and is a frame that allows efficient access to the reviewer. We strive to
                ensure novelty in each journal. It is a source that provides quality information about recent research and innovations. It provides a platform to the students
                of the university to grow and enhance the existing knowledge and to make new discoveries and inventions.
            </p>

            <ul className={styles.table}>
                {["Publication Frequency: 12 per year",
                    "Submission Email: emilgww@gmail.com",
                    "Submission contact: 94XXXXXXXX",
                    "Language accepted: English",
                    "Mode of submission(format):PDF/Google drive",
                    "Number of papers-3"].map((val, i) => {
                        return (
                            <li>
                                {/* <b>{i + 1}:</b>  */}
                                {val}
                            </li>
                        )
                    })}
            </ul>



            <h3>
                FEATURES OF A JOURNAL
            </h3>
            <p className={styles.features}>
                {["The journal submitted should not be published before for any publication.",
                    "It should be plagiarism free.",
                    "It should focus on specific issue or problem.",
                    "It should have unique DOI.",
                    "It should be based upon extensive reading and extraction of information from several sources and origin.",
                    "The extracted information should be form reliable source.",
                    "It should have a unique DOI."].map((value, index) => {
                        return (
                            <div><b>{index + 1}: </b>{value}</div>
                        )
                    })}
            </p>
        </main>
    )
}
export default AboutTheJournal;