import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Manufacturing from '../../../Images/Manufacturing.jpg'

export default function ManufacturingMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Manufacturing Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                         The US has the third largest manufacturing industry in the world producing 18.2% of the world’s goods. So, as a marketer, you have plenty of opportunities to build a valuable connection with executives in the industry. Our Manufacturing Industry Mailing List is reliable and enables businesses to build a genuine connection with potential manufacturing prospects, who plays a major role in decision making. The main countries included in this email list are the USA, Germany, New Zealand, Australia, Singapore, UK, Canada, and Southeast Asian countries.
                       </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={Manufacturing} className={classes.Image} alt="" />
                    </Grid>
                 </Grid>
                 <h2>Benefits of using our Manufacturing Mailing List</h2>
                <ul style={{ display: "block" }}>
                    <li>Reduces bounce rates </li>
                    <li>Boosts your revenue exponentially</li>
                    <li>Increases customer engagement </li>
                    <li>Accurate and responsive database</li>
                    <li>Enhances your email marketing campaigns</li>
                    <li>Reduces your overall marketing campaigns costs</li>
                    <li>Expands your operations to other countries</li>
                </ul>
                <Typography className={classes.SubText}>
                      Our skilled data compilation team frequently verifies and updates the email lists that help you to easily target the manufacturing sector. The mailing lists are updated from reliable resources such as newsletters, magazine subscriptions, tradeshows, surveys, company records, B2B directories, and yellow pages. All the contact details provided are permission-based and responsive which in turn helps you to successfully run your marketing campaigns.
                </Typography>
                <Typography className={classes.SubText}>
                    Reach out to the top-level management executives as well as the middle-level corporate executives in no time with our exclusive Manufacturing Mailing List. Easily access the contact details of design managers, project managers, procurement managers, equipment controllers, warehouse managers, sales managers, IT operation managers, and operators with our segmented Manufacturing Mailing List.
                </Typography>
                <p>Our clients love the 100% commitment we offer before and after the sale. Let us build your customized Manufacturing Mailing List for your business today!</p>
            </div>
        </div>
    )
}
