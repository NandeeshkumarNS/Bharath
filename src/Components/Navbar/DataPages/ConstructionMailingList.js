import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Construction from '../../../Images/Construction.jpg'


export default function ConstructionMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Construction Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Construction professionals always look out for vendors they can trust to buy or rent equipment, building materials, and supplies. If you are keen to contact these building contractors across the globe, then connect with us today and we help you customize your ideal contractor mailing list. We also help you market your products and services to decision-makers who make important buying decisions in large construction companies.
                        </Typography>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Our high-end Construction Email List includes a database of contractors including heavy construction contractors, general building contractors, special trade contractors, architects, site managers, and C-level executives in the construction industry. We tailor all our email lists to promote your business communication and accelerate your multi-channel marketing.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={Construction} className={classes.Image} alt="" />
                    </Grid>
                    <h2>Why should you buy our Construction Email List?</h2>
                    <Typography  className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        AtVertex Lists, we thrive to shorten our client’s sales cycle by providing the most reliable Construction Industry Mailing List. With our 100% verified mailing lists our clients can explore new markets, connect with new clients, and generate huge income in a short period. Never worry about bounce rates when you buy our Construction Mailing List as we ensure that your promotional email reaches the right inbox. We carry out cleansing, organizing, and validating the databases so that we can bring you a solid portfolio that helps you connect with the local and global players in the construction industry. Connect with our sales executive to utilize the potential of a professional Construction Email List and enjoy a valid database for your businesses at affordable pricing. 
                     </Typography >
                     &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                    <p>What are you waiting for? Grab the in-demand Construction Email List fromVertex Lists and achieve improved ROI, year after year!</p>
                </Grid>
            </div>
        </div>
    )
}
