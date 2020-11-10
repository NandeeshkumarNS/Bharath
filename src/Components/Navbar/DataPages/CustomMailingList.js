import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Custom from '../../../Images/Custom.jpg'

export default function CustomMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Custom Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            It takes years of effort for businesses to build a database of well-defined leads, not to mention it can be expensive and exhaustive too. With the need to constantly feed your sales team with relevant prospects for cold calling, Custom List building is the easiest solution to simplify the tasks for your sales team.
                        </Typography>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            Vertex Lists understands the importance of having the right database to achieve the desired outcome in marketing campaigns. Hence our team is here to provide you with the right set of data to achieve your goals smoothly.
                        </Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <img src={Custom} className={classes.Image} alt="" />
                    </Grid>
                    <h2>Let Us Simplify Your Email Marketing Campaigns for You</h2>
                    <Typography className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Our global clients trust our curated Custom Data Mailing Lists as we create personalized custom lists from a huge database of our B2B contact records. This specifically curated Custom Mailing List based on your target criteria makes your direct mail marketing campaign a success.
                   </Typography>
                    <h2>Here Is Why You Should Choose Us</h2>
                    <Typography className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        We understand that a mailing list can break or make your email campaigns hence we offer the most refined and Customized Direct Mail Lists for your business.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        You can segment the Customized Email List by city, state, country, zip code, profession, industry, lifestyle and buying habits, and many other specialty lists. Each of these lists is verified, validated, and ready to use.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Vertex Lists understands that one-size-fits-all does not work all the time. So, we offer Customized Mailing List Services that are unique to your business needs and also ensure the complete confidentiality of these lists.
                    </Typography>
                </Grid>
                <h2>Our Primary Source of Data</h2>
                <ul className="technology-demand custom" style={{ display: "block", width:"100%",margin:"0" }}>
                    <li>Tradeshows, events, and conferences</li>
                    <li>Tradeshow Attendee Lists</li>
                    <li>Public Record Information</li>
                    <li>Business and trade magazine subscriptions</li>
                    <li>Free Magazines/Newspaper Subscription Offers</li>
                    <li>9,000+ Telephone and online Directories and Yellow pages</li>
                    <li>Collection Sources</li>
                    <li>Government records and listings</li>
                    {/* <li>Postal Service Information (NCOA)</li> */}
                    <li>Annual reports, SEC filings and public filings</li>
                    <li>B2B Directory Partnerships</li>
                    <li>Business Trade magazine subscription Offers</li>
                </ul>

                <h2>Our Secondary Source of Data</h2>
                <ul className="technology-demand" style={{ display: "block", width:"100%",margin:"0" }}>
                    <li>Websites and Blogs</li>
                    <li>TV, Radio and Print Advertising</li>
                    <li>Phone Surveys</li>
                    <li>Opt-in email campaigns with offers Web Based Registrations / offers</li>
                    <li>Surveys and feedback forms</li>
                    <li>Point of sale</li>
                </ul>
            </div>
        </div>
    )
}
