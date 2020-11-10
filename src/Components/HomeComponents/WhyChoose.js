import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import Divider from '@material-ui/core/Divider';
import Transparency from '../../Images/Transparency.jpeg'
import Quality from '../../Images/Quality.jpeg';
// import OnTime from '../../Images/OnTime.jpeg';
import SafeMoney from '../../Images/SafeMoney.png'
import OnTime from '../../Images/OnTime.jpg'


export default function WhyChoose() {
    const classes = useStyles();
    return (
        <div className="WhyChoose-section">
            <Grid container spacing={3} style={{ padding: "40px", }}>
            <Grid item xs={12} sm={6}>
                    <Paper style={{ boxShadow: "none", display: "flex" }}>
                        <div>
                            <img src={Quality} className={classes.WhyChooseImage} alt="" />
                        </div>
                        <div style={{ textAlign: "left",paddingLeft:"20px" }}>
                            <Typography className={classes.SafeMoneyTitle} ><b>Quality Assurance</b></Typography>
                            <Typography className={classes.SafeMoneySubTitle} >We aim to provide quality data that empowers businesses to increase their revenue.</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ boxShadow: "none", display: "flex" }}>
                        <div>
                            <img src={OnTime} className={classes.WhyChooseImage} alt="" />
                        </div>
                        <div style={{ textAlign: "left" ,paddingLeft:"20px"}}>
                            <Typography className={classes.SafeMoneyTitle} ><b>On Time Delivery</b></Typography>
                            <Typography className={classes.SafeMoneySubTitle} >We are committed to delivering our services to our clients before the estimated time.</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ boxShadow: "none", display: "flex" }}>
                        <div>
                            <img src={SafeMoney} className={classes.WhyChooseImage} alt="" />
                        </div>
                        <div style={{ textAlign: "left", paddingLeft:"20px"}}>
                            <Typography className={classes.SafeMoneyTitle} ><b>100% Satisfied Clients</b></Typography>
                            <Typography className={classes.SafeMoneySubTitle} >We build long-term relationships with our clients and customer satisfaction is our highest priority.</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ boxShadow: "none", display: "flex" }}>
                        <div>
                            <img src={Transparency} className={classes.WhyChooseImage} alt="" />
                        </div>
                        <div style={{ textAlign: "left",paddingLeft:"20px" }}>
                            <Typography className={classes.SafeMoneyTitle} ><b>Best Price Guarantee</b></Typography>
                            <Typography className={classes.SafeMoneySubTitle} >We guarantee to offer competitive prices in the industry for all our services.</Typography>
                        </div>
                    </Paper>
                </Grid>
               
                
            </Grid>
            
        <Divider />
        </div >
    )
}
