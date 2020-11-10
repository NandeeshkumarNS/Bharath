

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    WorkSlideHeader: {
        fontSize: "23px",
        textAlign: "center",
        paddingTop: "20px",
        color: "midnightblue"
    },
    WorkSlideDetails:{
        padding:"30px 0px 0px 30px"
    }
})

class CarosalComponent extends React.Component {
    render() {
        var { classes } = this.props;
        return (
            <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={30}
                totalSlides={5}

            >
                <Slider style={{ border: "1px solid black", width: "900px", }}>
                    <Slide index={0}>
                        <Typography className={classes.WorkSlideHeader}><b>1. Drop your email ID with us by filling in the Schedule a Demo (Hyperlink) form. </b></Typography>
                        {/* <Typography className={classes.WorkSlideDetails}>Customer decides to construct a house (or renovate). He raise a service request from the Sensiri  website.</Typography>
                        <Typography className={classes.WorkSlideDetails}>He has heard that Sensiri can get it done with no headaches ! </Typography> */}
                    </Slide>
                    <Slide index={1}>
                        <Typography className={classes.WorkSlideHeader}><b>2. Our operation team connects with you to understand your business requirements. </b></Typography>
                        {/* <Typography className={classes.WorkSlideDetails}>Our expert visits customer, take all the requirements and submit quotations along with exhaustive specifications. </Typography> */}
                    </Slide>
                    <Slide index={2}>
                        <Typography className={classes.WorkSlideHeader}><b>3. An expert data scientist from our team connects with you to discuss what can be done from our end to improve the growth of your company.</b></Typography>
                        {/* <Typography className={classes.WorkSlideDetails}>Sensiri Team and allotted professional works on design and provides customer with two iterations of design / floor plan free of cost. </Typography> */}
                    </Slide>
                    <Slide index={3}>
                        <Typography className={classes.WorkSlideHeader}><b>4. We come to a legal agreement and start working on your project with the utmost transparency. </b></Typography>
                        {/* <Typography className={classes.WorkSlideDetails}>Customer pays 5% of the estimated project cost as the Booking Amount. </Typography> */}
                    </Slide>
                    <Slide index={4}>
                        <Typography className={classes.WorkSlideHeader}><b> 5.We deliver quality work before the expected time and help you reach your goal faster.</b></Typography>
                        {/* <Typography className={classes.WorkSlideDetails}>Sensiri Professional will provides exhaustive drawings and designs to customer till customer says - 'Wow ! Thats superb !'. Designs include 3D designs, Structural Designs, Electrical Designs, Woodwork Designs etc.
Work Execution starts !</Typography> */}
                    </Slide>
                    {/* <Slide index={5}>
                        <Typography className={classes.WorkSlideHeader}><b>6. Customer Safe Money Transfer</b></Typography>
                        <Typography className={classes.WorkSlideDetails}>A project is typically divided into multiple milestones or stages. </Typography>
                        <Typography className={classes.WorkSlideDetails}>To ensure ABSOLUTE TRUST to the system, Sensiri act as an escrow account. This means, customer transfers the amount of each stage to Sensiri. Only on successful completion of a stage, amount is transferred to the contractor. </Typography>
                        <Typography className={classes.WorkSlideDetails}>This ensures that customer’s money is safe and they have a most relaxed experience. </Typography>
                    </Slide> */}
                </Slider>
                <div style={{paddingTop:"30px",textAlign:"center",paddingBottom:"60px"}}>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </div>
            </CarouselProvider>
        );
    }
}

CarosalComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarosalComponent); 