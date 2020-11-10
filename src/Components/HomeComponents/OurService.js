import React from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';

export default function OurService() {
    const classes = useStyles();
    return (
        <div className="middle-level-section">
            <Grid container spacing={4} style={{ padding: "30px" }}>
                <Grid item xs={4} className={classes.GridFirst} >
                    <Typography className={classes.ServicesHeading}>Lead Generation </Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridSecond}> Email List Building</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridThird}> Data Cleansing</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridForth}> Data Appending</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridFifth}> Database Management Solutions</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridSixth}>  Email Appending</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridSiven}> Email Marketing</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridEight}>Website Development & Design</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography className={classes.GridNine}> Surveys</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
