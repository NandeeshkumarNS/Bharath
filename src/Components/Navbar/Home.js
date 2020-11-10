import React from 'react'
import HomeImage from '../../Images/Home.jpg'
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectsShow from '../../Images/ProjectsShow.png'
import Warranty from '../../Images/Warranty.jpg'

import WhyChoose from '../HomeComponents/WhyChoose'
import OurService from '../HomeComponents/OurService'
import CountUp from 'react-countup';
import Testimonials from './Testimonials'
import ProjectsNumbers from '../../Images/ProjectsNumbers.png'
import experience from '../../Images/experience.webp'
import Exports from '../../Images/Exports.png'
import Positive from '../../Images/Positive.png'
import Banner from '../../Images/Banner.jpg'

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className="banner-section" style={{ position: "relative" }}>
                <img src={Banner} className={classes.HomeImage} alt="" />
                <div className={classes.CompanyDetails}>
                    <Typography> <h1><b>Vertex Lists</b> </h1> </Typography>
                    <Typography><p><b>The Right Way to Find Qualified Leads for Your Business </b></p></Typography>
                </div>
            </div>
            <Grid container className="home-section" spacing={3} style={{ padding: "20px 0px 20px 0px",display:"flex", justifyContent:"center" }}>
                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <Paper style={{ boxShadow: "none" }}>
                        <img src={ProjectsNumbers} className={classes.ProjectsShowImage} alt="" />
                        <Typography className={classes.subTitle} >
                            <b> <CountUp end ={4000} duration ={300} />+ Projects</b>
                            </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <Paper style={{ boxShadow: "none" }}>
                        <img src={Warranty} className={classes.ProjectsShowImage} alt="" />
                        <Typography className={classes.subTitle} ><b>100% Data Protection & Compliances</b></Typography>
                    </Paper>
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <Paper style={{ boxShadow: "none" }}>
                        <img src={experience} className={classes.ProjectsShowImage} alt="" />
                        <Typography className={classes.subTitle} ><b>5+ years experience</b></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <Paper style={{ boxShadow: "none" }}>
                        <img src={Exports} className={classes.ProjectsShowImage} alt="" />
                        <Typography className={classes.subTitle} ><b>50+ professional experts </b></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <Paper style={{ boxShadow: "none" }}>
                        <img src={Positive} className={classes.ProjectsShowImage} alt="" />
                        <Typography className={classes.subTitle} ><b>95% Positive Reviews</b></Typography>
                    </Paper>
                </Grid>
                
            </Grid>
            {/* <div style={{textAlign:"center"}}>
                <Typography className={classes.ConstructionPackages} ><b>CONSTRUCTION PACKAGES</b></Typography>
                <div className={classes.UnderLine}></div>
                <ConstructionPackages />
            </div> */}
            <div className="home-section" style={{textAlign:"center"}}>
                <Typography className={classes.ConstructionPackages} style={{textAlign:"center",fontSize:"30px", paddingTop:"30px"}} ><b>WHY CHOOSE VERTEX LISTS</b></Typography>
                <WhyChoose />
            </div>
            <div  className="home-section" style={{textAlign:"center",fontSize:"30px"}}>
                <Typography className={classes.ConstructionPackages} style={{textAlign:"center",fontSize:"30px", paddingTop:"30px"}} ><b>OUR SERVICES</b></Typography>
                <OurService />
            </div>
            {/* <div style={{textAlign:"center"}}>
                <Typography className={classes.ConstructionPackages} ><b>CONSTRUCTION PACKAGES</b></Typography>
                <Typography className={classes.TurnkeyConstructionPackages} ><b>Turnkey House Construction Packages</b></Typography>
                <ConstructionDetailsPackages />
            </div>
            <div className="home-section" style={{textAlign:"center"}}>
                <Typography className={classes.TurnkeyConstructionPackages} ><b>Compound Wall Construction Packages</b></Typography>
                <WallConstructionPackages />
            </div>
            <div className="home-section" style={{textAlign:"center"}}>
                <Typography className={classes.TurnkeyConstructionPackages} ><b>Commercial/Industrial Construction Packages</b></Typography>
                <CommercialConstructionPackages />
            </div>
            <div className="home-section" style={{textAlign:"center"}}>
                <Typography className={classes.TurnkeyConstructionPackages} ><b>Carpentry & Fabrication Packages</b></Typography>
                <CarpentryAndWoodworkPackages />
            </div> */}
            {/* <Footer /> */}
            <Testimonials />
        </div>
    )
}
