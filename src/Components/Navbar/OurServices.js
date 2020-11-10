import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Education2 from '../../Images/Education2.jpg'
import leadgeneration from '../../Images/leadgeneration.webp'
import EmailList from '../../Images/EmailList.webp'
import datacleansing from '../../Images/data-cleansing.jpg'
import DataAppendingImage from '../../Images/DataAppendingImage.jpg';
import datamanagementsolutions from '../../Images/datamanagementsolutions.png'
import WebDevelopmentandWebDesignCompany from '../../Images/WebDevelopmentandWebDesignCompany.png'
import Emailmarketing from '../../Images/Emailmarketing.jpeg'
import EmailAppending from '../../Images/EmailAppending.jpg'
import surveyopinionresearchvotingfill from '../../Images/surveyopinionresearchvotingfill.jpg'

export default function OurServices() {
    const classes = useStyles();
    return (
        <div className="middle-level-section" style={{ padding: "60px" }}>
            <div className="our-services-block">
                <h1>Lead Generation</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <img src={leadgeneration} className={classes.LeadImage}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"28px"}}>Our business growth specialists will help you in creating lead generation campaigns that draw qualified leads to your website. We identify and cultivate potential leads having a high chance of conversion to make lead generation a smooth experience for you.</Typography>
                    </Grid>
                </Grid>
            </div>

            <div className="our-services-block">
                <h1>Email List Building</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                    <Typography style={{fontSize:"28px"}}>We have a multi-sourced global reference data to help you find and download premium contact information that converts prospects to customers with ease. We study your industry-specific potential leads and deliver the personal email lists ready for your campaign, at a minimal cost.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={EmailList} className={classes.LeadImage}  alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className="our-services-block">
                <h1>Data Cleansing</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <img src={datacleansing} className={classes.LeadImage}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"28px"}}>We constantly validate your existing data by removing the duplicates and retaining unique data for you to easily target qualified leads. Get rid of decayed data to improve your market penetration with ready to use data curated by our experts exclusively for your business. </Typography>
                    </Grid>
                </Grid>
            </div>

            <div className="our-services-block">
                <h1>Data Appending</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                    <Typography style={{fontSize:"28px"}}>The good health of your database is important to us which is why we upgrade your database with accurate contact information of your qualified leads. We help you reach your sales target with ease by timely updating any missing contact links in your contact list. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={DataAppendingImage} className={classes.LeadImage}  alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className="our-services-block">
                <h1>Database Management Solutions</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <img src={datamanagementsolutions} className={classes.LeadImage}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"28px"}}>We have explicitly designed and developed our database management services to protect the authenticity of your data and gain maximum value from it. Our talented database administrators can simplify complexity, reduce costs, and drive performance for your business. </Typography>
                    </Grid>
                </Grid>
            </div>

            <div className="our-services-block">
                <h1>Website Development & Design</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                    <Typography style={{fontSize:"28px"}}>We offer the best website development and design services to help you with your overall business growth. Our developers have excellent knowledge of computing architectures and they constantly work on technology up-gradation to provide responsive website designs for our clients. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={WebDevelopmentandWebDesignCompany} className={classes.LeadImage}  alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className="our-services-block">
                <h1>Email Marketing</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <img src={Emailmarketing} className={classes.LeadImage}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"28px"}}>We design highly engaging email marketing campaigns with our rich library of results-driven templates. We believe in email marketing done right, hence we provide insights and advance reports with complete transparency. Our proud email marketing team has helped our top clients increase their email open rates by 20%.</Typography>
                    </Grid>
                </Grid>
            </div>

            <div className="our-services-block">
                <h1>Email Appending</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                    <Typography style={{fontSize:"28px"}}>Our team of experienced professionals add missing data to your email database and get rid of the out-of-date addresses. Also, we use the email addresses you provide and update the lead’s name, social media profile, company, postal addresses, and more. Finding missing information about your leads has never been this easy.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={EmailAppending} className={classes.LeadImage}  alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className="our-services-block">
                <h1>Surveys</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <img src={surveyopinionresearchvotingfill} className={classes.LeadImage}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"28px"}}>We help you design simple or complex surveys by adding appropriate questionnaires to ease the data capturing process and survey management for your business. Build a full range of standard surveys that lets you scan barcodes, capture pictures, audio, and record information from external sensors.</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
