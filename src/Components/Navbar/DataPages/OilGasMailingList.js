import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OilGas from  '../../../Images/OilGas.jpg'

export default function OilGasMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Oil and Gas Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            The Oil and Gas Industry has become the global powerhouse employing a huge number of people and generating a large revenue every year. Thus, exponentially increasing the national GDP in the developing countries.Vertex Lists recognizes this huge opportunity for B2B marketers so we have assigned a trained research team to keenly follow the updates and recognize how our clients can be affected by the change.
                    </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src={OilGas} className={classes.Image} alt="" />
                    </Grid>
                    <h2>Why Investing in Our Oil & Gas Mailing List is the Safest Option for Your Marketing Campaigns?</h2>
                    <Typography className={classes.SubText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        The Oil and Gas Mailing List is handed over to our clients after passing it through many stages of the verification process. Our market research experts follow strict guidelines during data collection. Double security checks are done for each contact to achieve a high deliverability rate in our client’s marketing campaigns. This helps to save time and cost too.
                        We provide fresh and deliverable data that simplifies the lead generation process for your business. Apart from that, this data is most suitable for market research, market exploration and expansion, competitor analysis, and more.
                        Our Oil & Gas Mailing List includes the contact records of specialists involved in mining, oil production, distribution, transportation, and more. With this email list, you can reach out to senior professionals who work in Crude Petroleum and Natural Gas, Natural Gas Liquids, Gas Wells and Drilling Oil, and so on.
                     </Typography>
                   <p>Just leave your contact details below and we will get back to you with your quote within 24 hours!</p>
                </Grid>
            </div>
        </div>
    )
}
