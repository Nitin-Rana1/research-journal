import styles from "./AboutUs.module.scss";
import ProfessorCard from "./ProfessorCard";

function EditorialTeam({ part }: any) {
    const profArr = [];
    // let prof = new Professor("Dr. L.H. Manjunatha", 
    // ["Editor-in-Chief", "Professor School  of Mechanical Engineering REVA  University"],
    //  "email: manjunath.lh@reva.edu.in",["none"]);

    return (
        <main className={styles.editorialTeam}>
            <h2>

                Editorial Team
            </h2>
            <ProfessorCard name="Prof. (Dr.) U.C. Jha"
                pos={["Professor", "School of Mechanical Engg.", "Lovely Professional University Punjab,  India"]}
                email={"udai.22511@lpu.co.in"}
                place={"India"}
            />
            <ProfessorCard name="Prof. (Dr.) U.C. Jha"
                pos={["Professor", "School of Mechanical Engg.", "Lovely Professional University Punjab,  India"]}
                email={"udai.22511@lpu.co.in"}
                place={"India"}
            /><ProfessorCard name="Prof. (Dr.) U.C. Jha"
                pos={["Professor", "School of Mechanical Engg.", "Lovely Professional University Punjab,  India"]}
                email={"udai.22511@lpu.co.in"}
                place={"India"}
            /><ProfessorCard name="Prof. (Dr.) U.C. Jha"
                pos={["Professor", "School of Mechanical Engg.", "Lovely Professional University Punjab,  India"]}
                email={"udai.22511@lpu.co.in"}
                place={"India"}
            /><ProfessorCard name="Prof. (Dr.) U.C. Jha"
                pos={["Professor", "School of Mechanical Engg.", "Lovely Professional University Punjab,  India"]}
                email={"udai.22511@lpu.co.in"}
                place={"India"}
            />
        </main>
    )
}
export default EditorialTeam;