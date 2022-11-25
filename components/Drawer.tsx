import { Box, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Home.module.scss'


const ListC = ({ toggleDrawer, handleLogOut }: any) => (
    <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
        className={styles.box}
    >
        <List>
            <div onClick={toggleDrawer(false)}>
                <Link href="/">
                    <ListItem disablePadding >
                        <ListItemButton >
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href="/current-issue">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Current Issue" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </div>


            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Editorial Policy</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ paddingRight: 0 }}>
                        <List onClick={toggleDrawer(false)} >
                            {["Publication Ethics", "Open Access Policy", "Peer-review Policy", "Digital prevention Policy", "Plagiarism Policy", "Journal Policy", "Repository Policy", "Copy Right Policy"].map((value, i) => {
                                return (
                                    <Link key={i} href="/editory-policy">
                                        <ListItem onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                                            <ListItemButton>
                                                <ListItemText primary={value} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                )
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>About Us</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ paddingRight: 0 }}>
                        <List onClick={toggleDrawer(false)} >
                            {["About The Journal", "Focus And Scope", "Editorial Team"].map((value, i) => {
                                return (

                                    <Link key={i} href="/about-us">
                                        <ListItem onClick={toggleDrawer(false)} className={styles.editoryPolicyMenu}>
                                            <ListItemButton>
                                                <ListItemText primary={value} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                )
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div onClick={toggleDrawer(false)}>


                <Link href="/login-signup">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Sign In/Up" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText onClick={handleLogOut} primary="Log Out" />
                    </ListItemButton>
                </ListItem>
            </div>

        </List >
    </Box >
);
export default ListC;