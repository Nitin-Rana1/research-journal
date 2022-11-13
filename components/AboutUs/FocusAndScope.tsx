import styles from "./AboutUs.module.scss";


function Sec({ head, info, no }: { head: string, info: string, no: number }) {
    return (
        <p className={styles.sec}>
            <div className={styles.secHead}>

                <b>Section {no}: </b> {head}
            </div>
            <div>
                {info}
            </div>
        </p>
    )
}
function FocusAndScope({ part }: any) {
    return (
        <main className={styles.focusAndScope}>
            <h3>
                FOCUS AND SCOPE
            </h3>
            <p>
                Grahic Era Journal of Research and Innovation intends to serve the students of the university who are comitted to assist study and enhace their aptitude by giving
                an aid for composing high caliber reseach paper.
                <p>

                    {["The focus on journal writing should demonstrate a good undeerstanding of the topic including enough examples and important details.",
                        "Research focuses on enhancing your problem solving abilities and critical thinking.",
                        "The scope of a study explains the extend to which the reseach area will be explored in the work and specifies the parameters within the study.",
                        "It helps nurture the curiosity of the budding innovators and researchers.",
                        "It focuses on providing quality  and correct information on a wide variety of topics."].map((v, i) => (
                            <div key={i}><b>{i + 1}. </b>{v}</div>
                        ))}
                </p>
            </p>
            <h3>

                THE TYPES OF JOURNALS ARE :
            </h3>
            <p>
                {
                    ["Research Articles: A research article is a regular article that aims to present new findings.    Short Communication: A letter to the editor is a short article which aims to present new findings that require fast publication procedures.",
                        "Short Communication: A letter to the editor is a short article which aims to present new findings that require fast publication procedures.",
                        "3.Review Articles: A review article is an article which aims to present comprehensively already existing findings.",
                        "Innovations: An innovation is an article which aims to present new procedures or devices.",
                        "Selected conference articles: Upon an agreement with a conference committee, selected papers may be published in the Journal in a special section. In this case, the editor will appoint in collaboration with the conference committee guest editors."].map((v, i) => (
                            <div key={i}><b>{i + 1}. </b>{v}</div>
                        ))
                }
            </p>
            <h4>

                Grahic Era Journal of Research and Innovation publishes original papers in various fields of Engineering and Technology that cover, but are not limited to,
                the following areas:
            </h4>
            <Sec head="Computer Science & information engineering" info="Computer Science, Computer Engineering,   Information Engineering" no={1} />
            <Sec no={2} head="Electrical and Electronics Engineering" info="Electrical Engineering, Electronics Engineering, Communication Engineering" />
            <Sec no={3} head="Civil Engineering" info="Civil Engineering, Architecture & Town Planning,   Environmental Engineering" />
            <Sec no={4} head="Mechanical Engineering" info="Automobile Engineering, Materials & Manufacturing Engineering, Mechanical Engineering, Materials science and Metallurgy, Automation and Robotics" />
            <Sec no={5} head="Chemical Engineering" info="Chemical Engineering, Food sciences, and technology, Biotechnology" />
            <Sec no={6} head="Allied branches of Engineering" info="Agro Engineering, Mining Engineering" />
        </main>
    )
}
export default FocusAndScope;