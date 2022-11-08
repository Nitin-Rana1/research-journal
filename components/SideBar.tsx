import styles from "./styles/SideBar.module.scss"
import { AccessAlarm, ArrowForwardIos } from '@mui/icons-material';
import { Icon } from "@mui/material";
function SideBar() {
    return (
        <main className={styles.sidebar}>
            <article>
                <h3>Members Area</h3>
                <div className={styles.bigLine}><div></div></div>
                <span>
                <p><ArrowForwardIos/>Get Register</p>
                <p><ArrowForwardIos/>Member Sign In</p>
                </span>
            </article>
            <article>
                <h3>Authors</h3>
                <div className={styles.bigLine}><div></div></div>
                <span>
                <p><ArrowForwardIos/> Kin Smith</p>
                <p><ArrowForwardIos/>Riya</p>
                <p><ArrowForwardIos/>Tisth</p>
                <p><ArrowForwardIos/>Lorry</p>
                </span>
            </article>
        </main>
    )
}
export default SideBar;