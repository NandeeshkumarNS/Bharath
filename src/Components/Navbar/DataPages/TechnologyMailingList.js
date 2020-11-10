import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Technology from '../../../Images/Technology.jpg'

export default function TechnologyMailingList() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ContainerData}>
                <h1>Technology Mailing List</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.HeadingText}>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            The ever-evolving technology sector is a storehouse of business opportunities. If you have a product that would interest the tech-savvy consumers and professionals, then you must reach out to them at the earliest to bring about massive business growth in a short period. To attain that, our comprehensive <b>Technology Mailing List</b> will help you connect with leading developers and programmers, internet experts, and professionals in the IT management domain.
                    </Typography>

                    </Grid>
                    <Grid item xs={6}>
                    <img src={Technology} className={classes.Image} alt="" />
                    </Grid>
                    <h2 style={{ marginBottom:"15px"}}>Benefits of using our Technology Mailing List</h2>
                    <ul style={{ display: "block" }}>
                        <li>We provide decision making executives’ contacts who oversee purchase decisions for large companies</li>
                        <li>Triple verified and responsive data</li>
                        <li>Reduce overall campaign costs with segmented lists</li>
                        <li>Regularly updated and manually verified email lists</li>
                        <li>Nurture multichannel campaigns effectively</li>
                    </ul>
                    <h2>What is unique about our Technology Mailing List?</h2>
                    <Typography className={classes.SubTextFirst}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        With the growing data privacy concerns of the netizens, we atVertex Lists ensure that all the data is ethically obtained and is in complete compliance with the data protection laws. Also, the contact database of leading technology professionals, consumers, and decision-makers are verified and result-driven.
                        Years of experience in building relevant email lists have made us pioneers in the tech industry. The Technology Mailing List that we offer covers a wide range of business technologies including NetApp, MSQL, HootSuite, SAP, BigData, WebEx, MS Azure, Kronos, Cloud Services, Adobe, FreshBooks, AWS, and more.
                        What are you waiting for? Stay ahead of the competition and give your email marketing campaigns a competitive edge with our exclusive Technology Email List curated just for your niche business!
                    </Typography>
                    <h3 style={{ marginBottom:"15px"}}>Our in-demand Technology Email List </h3>
                    <ul className="technology-demand" style={{ display: "block", width:"100%",margin:"0" }}>
                        <li>Partners Resellers</li>
                        <li>Technology Append List</li>
                        <li>Industry based List</li>
                        <li>IT Providers</li>
                        <li>MSP’s, VAR’s</li>
                        <li>Skills based List</li>
                        <li>User List</li>
                        <li>Integrators ISV’s</li>
                        <li>IT Certification</li>
                        <li>Tigger based List</li>
                        <li>Contact based List</li>
                    </ul>
                </Grid>
            </div>
        </div>
    )
}
