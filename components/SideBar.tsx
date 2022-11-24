import styles from "./styles/SideBar.module.scss"
import { AccessAlarm, ArrowForwardIos } from '@mui/icons-material';
import { Button, Icon } from "@mui/material";
import Link from "next/link";
function SideBar() {
    return (
        <main className={styles.sidebar}>
            <article>
                <div className={styles.blueButtonGroup}>
                    <Button variant="contained" className={styles.submitButton}>
                        <Link href="/submit-paper">
                            Submit Journal
                        </Link>
                    </Button>
                    <Button variant="contained" className={styles.blueButton}>ISSN: 2432-1001 </Button>
                    <Button variant="contained" className={styles.blueButton}>DOI: 10.31695/UERAT</Button>
                    <Button variant="outlined" className={styles.plainButton}>
                        <Link href="/author-guidelines">
                            Author Guidelines
                        </Link>
                    </Button>
                    <Button variant="outlined" className={styles.plainButton}>
                        <Link href="/processing-fee">
                            Article Processing Fee
                        </Link>
                    </Button>
                    <Button variant="outlined" className={styles.plainButton}>
                        <Link href="/policies">
                            Policies
                        </Link>
                    </Button>

                </div>
            </article>
        </main>
    )
}
export default SideBar;