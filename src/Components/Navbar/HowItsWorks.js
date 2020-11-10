import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import { Carousel } from "react-responsive-carousel";
import CarosalComponent from '../HowitsWorks/CarosalComponent'



export default function HowItsWorks() {
    const classes = useStyles();
    return (
        <div className="middle-level-section">
            <div style={{ textAlign: "center" }}>
                <Typography className={classes.TurnkeyConstructionPackages} ><b>HOW WE WORK</b></Typography>
                <marquee className={classes.SubTitle} direction="left" height="30px" width="100%" bgcolor="white">
                At Vertex Lists, our team of experts has designed a work process that makes things simple and hassle-free for our customers. We value your time and our team tries their best to provide quality services within a minimum period.
                </marquee>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <CarosalComponent />
            </div>
           
        </div>
    )
}
