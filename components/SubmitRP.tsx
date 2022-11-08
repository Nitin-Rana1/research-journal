import styles from "./styles/SubmitRP.module.scss"
function SubmitRP({handleHomePageButton}:any){
    return(
        <main className={styles.main}>

            <button onClick={handleHomePageButton}>Home Page</button>
        </main>
    )
}
export default SubmitRP;