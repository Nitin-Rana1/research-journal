import styles from "./EditoryPolicy.module.scss";
function EditoryPolicy({ part }: any) {
    return (
        <main className={styles.main}>
            <div>
                <h1>Editory Policy Page NO: {part + 1}</h1>
            </div>
        </main>
    )
}
export default EditoryPolicy;