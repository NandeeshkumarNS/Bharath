import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export default function Footer() {
    const classes = useStyles();
    return (
        <div className="footer-section">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.MoreDetailsCompany}><b>More About Company</b></Typography>
                    <Typography className={classes.MoreDetails}>
                    Vertex Lists, a team of marketing experts is here to help businesses reach their desired marketing objectives. The friendly team of young professionals ensures a great experience for the clients and focuses mainly on maintaining work ethics, professionalism, and punctuality. Be rest assured that Vertex Lists helps you strike the right leads and reach your expected sales target. 
                     </Typography>
                </Grid>

                <Grid item xs={6} sm={3} >
                    <Typography className={classes.MoreDetailsCompany}><b>Keep Connected</b></Typography>
                    <div style={{ display: "flex", paddingTop: "0px" }} >
                        <FacebookIcon style={{ color: "#fff" }} />
                        <Typography className={classes.LinkName} >Like us on Facebook</Typography>
                    </div>
                    {/* <div style={{ display: "flex", paddingTop: "15px" }}>
                        <TwitterIcon style={{ color: "#fff" }} />
                        <Typography className={classes.LinkName}><a href="https://twitter.com/SensiriC"  target="_blank">Like us on Twitter</a></Typography>
                    </div> */}
                    {/* <div style={{ display: "flex", paddingTop: "15px" }}>
                        <InstagramIcon style={{ color: "#fff" }} />
                        <Typography className={classes.LinkName}>Like us on Instagram</Typography>
                    </div> */}
                    <div style={{ display: "flex", paddingTop: "15px" }}>
                        <LinkedInIcon style={{ color: "#fff" }} />
                        <Typography className={classes.LinkName}><a href="https://www.linkedin.com/in/vertex-lists-3021ba1bb/"  target="_blank">Like us on LinkedIn</a></Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography className={classes.MoreDetailsCompany}><b>Contact Information</b></Typography>
                    {/* <div style={{ display: "flex", paddingTop: "20px" }}>
                        <HomeIcon style={{ color: "White" }} />
                        <Typography className={classes.LinkName}>
                            #54, Celebrity Grandeur Annexe, Jigani, Bangalore,Karanataka, India, 560105
                        </Typography>
                    </div> */}
                    <div style={{ display: "flex", paddingTop: "0px" }}>
                        <PhoneIphoneIcon style={{ color: "White" }} />
                        <Typography className={classes.LinkName}>
                          +1 (680) 205-1365
                        </Typography>
                    </div>
                    <div style={{ display: "flex", paddingTop: "15px" }}>
                        <MailIcon style={{ color: "White" }} />
                        <Typography className={classes.LinkName}>
                           info@vertexlists.com
                        </Typography>
                    </div>
                </Grid>
            </Grid>
{/* <Divider style={{backgroundColor:"white",MarginBottom:"10px",marginTop:"80px"}} /> */}
        </div>
    )
}
