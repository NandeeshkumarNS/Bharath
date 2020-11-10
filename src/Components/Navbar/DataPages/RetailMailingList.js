import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Retail from '../../../Images/Retail.jpg'

export default function RetailMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Retail Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                            Retail Industry faces a lot of hitches at the time of delicate economic situations. Especially when there is a dip in the growth rate and a hike in the price of the commodities, it becomes difficult for the retailers to attract customers. During such times, a smart marketing move can help overcome vast competition and attract customers to your online and physical stores.
                         </Typography>

                        <Typography className={classes.HeadingText}>
                            To thoroughly understand the customers’ expectations, the retail businesses need a Retail Industry Email List that can help them leverage the power of data to boost product sales.
                        </Typography>

                    </Grid>
                    <Grid item xs={6}>
                    <img src={Retail} className={classes.Image} alt="" />
                    </Grid>
                </Grid>
                <h2>How doesVertex Lists help Retailers?</h2>
                <Typography className={classes.SubTextFirst}>
                    We offer all the necessary insights required for businesses to connect with customers globally. This includes all the reports of the emerging trends in social media, contacts of regular users of popular brands, grocery stores email list, associate merchandise buyer email list, rent, and lease services email list, home improvement email list, gift stores, and florists email list, office products email list, computers shops mailing list and more! Reach out to key decision-makers and senior-level executives worldwide with our exclusive Retail Industry Email List.
                </Typography>
                <h3>Advantages of Buying Our Exclusive Retail Industry Email List</h3>
                <ul style={{ display: "block" }}>
                    <li>Effortlessly connect with major supply chain partners</li>
                    <li>Reach out to the decision-makers of wholesale shops</li>
                    <li>Understand Customer Expectations and Preferences</li>
                    <li>Be aware of the emerging trends in social media </li>
                    <li>Utilize the data to achieve desirable results </li>
                </ul>
                <Typography className={classes.SubText}>
                If you are looking for a verified and updated mailing list in the retail industry,Vertex Lists is your one-stop shop to help your business. 
                </Typography>
                <p>Schedule a call (Hyperlink) with our experts to know how you can improve your business with our services. </p>
            </div>
        </div>
    )
}
