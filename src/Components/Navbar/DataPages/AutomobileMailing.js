import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Automobile from '../../../Images/Automobile.jpg'

export default function AutomobileMailing() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Automobile Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Getting an Automobile Email List from a dependable source is difficult to find these days. This is whereVertex Lists comes to your rescue. We help you enhance your business productivity and stay ahead of the competition with our genuine email lists. We also manage and deliver niche market information to our clients and help achieve their marketing goals faster. Our list is compiled and verified from reliable sources that help you to make better business communications and nurture your campaigns.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={Automobile} className={classes.Image} alt="" />
                    </Grid>
                    <h2 className={classes.H3Tag}><b>Why use our Automobile Email Lists?</b> </h2>
                    <Typography className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                         When it comes to improving your marketing strategies, we leave no stone unturned to help you succeed with the opportunities offered by an upgraded database. Organizations can find significant customer growth in their business with our Automobile Email List. Our automobile-centric marketing solutions are designed to increase your sales and decrease the sales cycle time and the time spent on marketing. 
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        A comprehensive Mailing List that we provide will help you connect with the leading automobile dealers, automotive parts and accessories dealer, automotive service, and automobile retailers to name a few. With the contacts of users interested in automobile products and solutions, you can reach out to more qualified leads.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        An authentic Automobile Mailing List fromVertex Lists is the perfect way to reach the leading decision-makers in the Automobile industry and enhance your business productivity. Invest in the best of Automobile Email Lists in the automobile industry withVertex Lists.
                    </Typography>
                </Grid>
                <p style={{paddingTop:"30px"}}>Let us know about your requirements and we provide you the right set of leads at a minimal cost!</p>
            </div>
        </div>
    )
}
