import styles from "./styles/SideBar.module.scss"
import { AccessAlarm, ArrowForwardIos } from '@mui/icons-material';
import { Button, Icon } from "@mui/material";
function SideBar() {
    return (
        <main className={styles.sidebar}>
            <article>
                <div className={styles.blueButtonGroup}>
                <Button variant="contained" className={styles.blueButton}>ISSN: 2432-1001 </Button>
                <Button variant="contained" className={styles.blueButton}>DOI: 10.31695/UERAT</Button>
                <Button variant="outlined" className={styles.plainButton}>Author Guidelines</Button>
                <Button variant="outlined" className={styles.plainButton}>Article Processing Fee</Button>
                <Button variant="outlined" className={styles.plainButton}>Policies</Button>
                </div>
                </article>
        </main>
    )
}
export default SideBar;