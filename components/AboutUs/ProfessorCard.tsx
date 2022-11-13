import styles from "./AboutUs.module.scss";
function ProfessorCard({ name, pos, email, place }: { name: string, pos: string[], email: string, place: string }) {
    return (
        <main className={styles.professorCard}>
            <h3>{name}</h3>
            {pos.map((v, i) => (
                <div key={i}>{v}</div>
            ))}
            <div><b>Email: </b> {email}</div>
            <div>{place}</div>
        </main>
    )
}
export default ProfessorCard;