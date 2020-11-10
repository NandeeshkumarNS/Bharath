import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Education from '../../../Images/Education.jpg'


export default function EducationMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Education Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            The major challenges that the educational institutions face these days are the difficulty in promoting a course from their program and reaching out to a larger niche audience for pre-admissions. Promoting the courses to eligible students and parents at the right time is possible when institutions have the access to the mailing list of schools, colleges, and universities.
                        </Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <img src={Education} className={classes.Image} alt="" />
                    </Grid>
                    <h2>How we help you overcome these challenges?</h2>
                    <Typography className={classes.H3Tag}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Since the introduction of E-learning, educational institutions have seen revolutionary progress in the way student’s data is processed. We offer exclusive data solutions that are backed by insights based on the research of popular industry experts.
                   </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Our <b>Education Industry Email List</b> Categories include the email lists of catholic schools', kindergarten, Pvt schools, technical and trade schools, teachers and professors, schools and educational services, K-12 education, and so on.
                   </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Vertex Lists is best known for having a good reputation in building client relationships by offering services that exceed the industry standards.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Empowering educational institutions to leverage the power of diverse data sources for advanced analysis & reporting with our Education Industry Email List is our favorite job. We help you reform the way you target your audience and present you with a cohesive view of the database for easy targeting.
                   </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Vertex Lists believes in success stories. So, every time you approach us, we connect you to the right prospects who benefits from you. Schedule a demo with us to begin your success story!
                    </Typography>
                </Grid>
            </div>
        </div>
    )
}
