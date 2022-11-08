import styles from "./styles/SideBar.module.scss"
function SideBar() {
    return (
        <main className={styles.sidebar}>
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
        </main>
    )
}
export default SideBar;