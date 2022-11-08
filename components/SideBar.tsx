import styles from "./styles/SideBar.module.scss"
function SideBar() {
    return (
        <main className={styles.sidebar}>
            <article>
                <h3>SearchArticle</h3>
                <div className={styles.bigLine}>
                    <div></div>
                </div>
            </article>
            <article>
                <h3>Member's Area</h3>
                <span>
                    Get Register
                </span>
                <span>Member Sign In</span>
            </article>
        </main>
    )
}
export default SideBar;