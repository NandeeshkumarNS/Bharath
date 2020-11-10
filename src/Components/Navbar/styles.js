import { makeStyles } from "@material-ui/styles";
// import Home from "./Home";


export default makeStyles(theme => ({
    LogoImage: {
        maxWidth: "90px",
        height: "auto",
        paddingTop:"8px"
    },
    NavItems: {
        paddingTop: "30px"
    },
    // ul, a: {
    //     display: "block",
    //     padding: "10px"
    // },
    //    .........Home.......

    HomeImage: {
        width: "100%",
        height: "auto"
    },
    CompanyDetails: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "92.6%",
        backgroundColor: "rgba(0, 0, 0, 0.6901960784313725)",
        padding:"50px"
    },
    ProjectsShowImage: {
        height: "100px",
        width: "100px"
    },
    subTitle: {
        fontSize: "16px",
        color: "#000"
    },
    ConstructionPackages: {
        fontSize:"30px",
        color: "darkslategrey",
        textAlign: "center"
    },
    UnderLine: {
        width: "80px",
        margin: "20px",
        height: "10px",
        color: "darkslategrey",
        textAlign: "center",
        backgroundColor: "darkslategrey"
    },
    // ...........CONSTRUCTION PACKAGES........

    TurnkeyConstructionPackages: {
        fontSize: "30px",
        color: "cadetblue",
        textAlign: "center",
        paddingTop: "30px"
    },
    bar: {
        width: "30px",
        margin: "2px",
        height: "6px",
        color: "blue",
        backgroundColor: "gray"
    },
    btn: {
        paddingRight: "35px",
        display: "inline-block",
        cursor: "pointer"
    },
    Logo: {
        display: "inline-block",
        fontSize: "1.25rem",
        lineHeight: "inherit",
        whiteSpace: "nowrap"

    },
    NaveItems: {
        display: "block",
        padding: "0 15px",
        textDecoration: "none",
        transition: "all 0.5s ease",
        color:"#000",
        // fontSize:"20px"
       "&:hover" :{
            background: "none",
          }
    },
    DropDown: {
        border: "none",
    },


    // TESTIMONIAL
    Carousel:{
        width:"70%",
        height:"400px",
        border:"1px solid blue",
        color:"white",
        backgroundColor:"blueviolet",
      
    },
    Comments:{
        fontSize:"50px",
        Padding:"40px"

    },

    // Our services
    ServiceImage:{
        width:"100%",
        height:"75%"
    },
    LeadImage:{
        width:"100%",
        height:"100%"
    }


}))