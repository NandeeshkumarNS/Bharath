import React from 'react'
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContactUs from '../ContactUs'
import { Link } from 'react-router-dom'
import Healthcare from '../../../Images/Healthcare.jpg'


export default function HealthcareMailingList() {
    const classes = useStyles();
    return (
        <div className={classes.ContainerData}>
            <h1>Healthcare Mailing List</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography className={classes.HeadingText}>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                        B2B Businesses are often looking out for new marketing and sales tactics to stay ahead of the competition they face in the industry. One of the easiest methods followed by marketers for a long time is buying relevant email database to directly contact qualified leads.
                    </Typography>

                </Grid>
                <Grid item xs={6}>
                <img src={Healthcare} className={classes.Image} alt="" />
                </Grid>
                <h2 style={{padding:"0 15px"}}>Why Should You Buy our Healthcare Email List?</h2>
                <Typography  className={classes.SubTextFirst}>
                We provide a <b>Healthcare Email List</b> that includes the contact details of medical devices providers, local clinics, multi-specialty hospitals, telemedicine executives, pharmacies, nursing, and community care facilities, dentists, medical and diagnostic laboratories, physicians, healthcare practitioners, and residential mental health centers.
                     A systematized Healthcare Email List reduces the campaign costs and the time spent on the sales process. With our Healthcare Email List, you can easily reach out to qualified healthcare leads and enhance the outcome of your lead generation campaigns.
                 </Typography>
                <h2 style={{padding:"0 15px"}}>Advantages of Using Our Healthcare Mailing List</h2>
                <Typography className={classes.SubTextFirst}>
                <b>Better Brand Visibility:</b> Build successful email marketing campaigns to increase your organization’s visibility and target a broader audience.
                 </Typography>
                <Typography className={classes.SubText}>
                <b>Increase in ROI:</b> Our routinely updated healthcare list helps you reach out to your targeted audience through multiple channels and in turn improve your organization’s ROI.
                 </Typography>
                 
                <Typography className={classes.SubText}>
                    <b>Segmented List for Busy Professionals:</b> The segmented email list that we offer is ready to use in your multichannel marketing campaigns.
                </Typography>
            </Grid>
            <h2>Our in-demand Healthcare Email List</h2>
            <div>
                <ul className="technology-demand" style={{ display: "block", width:"100%",margin:"0" }}>
                    <li>Podiatric Surgeon Email List</li>
                    <li>Radiologist Email List</li>
                    <li>Surgeon Email List</li>
                    <li>Physicians Assistants Email List</li>
                    <li>Dermatologist Email List</li>
                    <li>Psychologist Email List</li>
                    <li>Ophthalmologist Email List</li>
                    <li>Paediatrician Email List</li>
                    <li>Optometrist Email List</li>
                    <li>Oncologist Email List</li>
                    <li>Bariatrician Email List</li>
                    <li>Medical Email List</li>
                    <li>Urologist Email List</li>
                    <li>Pathologist Email List</li>
                    <li>Chiropractor Email List</li>
                    <li>Hospital Email List</li>
                    <li>Cardiologist Email List</li>
                    <li>Doctors’ Email List</li>
                    <li>Nurses Email List</li>
                    <li>Cardiac Surgeons Email List</li>
                    <li>Dentist Email List</li>
                    <li>Endocrinologist Email List</li>
                    <li>Physician Email List</li>
                    <li>Gastroenterologist Email List</li>
                    <li>Physical Therapist Email List</li>
                    <li>Massage Therapist Email List</li>
                    <li>Psychiatrist Email List</li>
                    <li>Nephrologist Email List</li>
                </ul>
            </div>
            <Typography>
                The <b>Healthcare List</b> we provide will help you connect with the professionals and leaders of the Healthcare Industry. Should you need any help with lead generation campaigns in the healthcare industry,Vertex Lists is just an email away! Learn more<Link href={ContactUs}>Click here</Link> about our services now!
                </Typography>

        </div>
    )
}
