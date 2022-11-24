import styles from "./AboutUs.module.scss";
import AboutTheJournal from "./AboutTheJournal";
import FocusAndScope from "./FocusAndScope";
import EditorialTeam from "./EditorialTeam";
function AboutUsC({ part = 1 }: any) {
    return (
        <main className={styles.main}>
            {part === 0 && <AboutTheJournal />}
            {part === 1 && <FocusAndScope />}
            {part === 2 && <EditorialTeam />}
        </main>
    )
}
export default AboutUsC;