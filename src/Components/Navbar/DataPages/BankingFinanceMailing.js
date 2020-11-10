import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Banking from '../../../Images/Banking.jpg'


export default function BankingFinanceMailing() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Banking and Finance Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            The strength of the economy directly depends on the strength of its financial sector which mainly consists of banks, insurance companies, and investment companies. With the recession, it is crucial to build healthy relationships with organizations handling, managing, tracking, and exchanging money. For the last 10 years, we have assisted businesses with accurate and genuine mailing lists. Get in touch with us and our team would be happy to help you find your potential customer.
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Banking} className={classes.Image} alt="" />
                    </Grid>
                    <Typography className={classes.HeadingText}>
                            At Vertex Lists, we help you reach over 1,50,000 top-level executives and drive better quality leads with our exclusive Banking & Finance Mailing List. Our ready-to-download contact records mainly consist of Name, Website link, Phone number, Industry, SIC Code, FAX Number Email address, and Postal address that includes street, city, state, country, and ZIP code.
                        </Typography>
                    <h2>How is Our Financial & Banking Mailing List Different from Others in The Industry? </h2>
                    <Typography className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        We study the client business requirements, budget, timeframe, and target audience and develop personalized mailing lists that can fetch maximum ROI. So, by using our mailing list you can target qualified leads who are likely to show interest in your product or have a buying intent.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        Our pre-verified Financial & Banking Mailing List is in the Excel or CSV format to avoid any kind of inconvenience for your marketing campaigns. Buy customized Banking & Finance Industry Email List offered byVertex Lists and reach out to the target audience in the USA, UK, Europe, Canada, Asia & Australia.
                    </Typography>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        A genuine finance directory consisting of valuable contacts is just a download away! Get your Banking & Finance Mailing List today.
                     </Typography>
                </Grid>
            </div>
        </div>
    )
}
