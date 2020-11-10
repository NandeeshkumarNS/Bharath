

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import Grid from '@material-ui/core/Grid';

export default function Testimonials(props) {
    const classes = useStyles();
    var items = [
        {
            name: "- Noah, New Jersey",
            description: "Vertex Lists is a full-fledged solution for fast-paced companies. They have helped us to intelligently engage with our leads throughout their lifecycle. We have used their services for running marketing campaigns, build lead nurturing workflows, analyze user behavior, and more. I am happy with their services!"
        },
        {
            name: "- Ethan, California",
            description: "Vertex Lists is the first company that comes to my mind when I am looking for leads that are specific to my industry. They have been reliable in creating targeted and relevant emails, earning our company more revenue in a short period."
        },
        {
            name: "-Abigail, West Virginia",
            description: " Vertex Lists provides an affordable & intuitive solution for Database Management. I like the way they are always available to attend our queries and how they managed to provide undivided support whenever our team needed it the most. "
        },
        {
            name: "- Emily, Texas",
            description: "  Vertex Lists provides low-cost email marketing solutions that offer results-driven strategies to increase sales. Their all-in-one email marketing solution gave me a huge number of relevant leads within a short time."
        },
        {
            name: "- Samantha",
            description: "   The operation team at Vertex Lists was really quick to understand our industry-specific needs and we are surprised how they have exceeded our expectations time and again. Their commitment to meet the deadline helped us achieve results faster."
        },
        {
            name: "- Lauren, Sydney",
            description: "   Our conversion rate increased by 25% when Vertex Lists handled our email marketing campaigns. I am happy with the commitment they have towards their clients. A friendly support team handles all our queries on time. "
        }


    ]

    return (
        <Carousel  className="testimonial-block">

            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <div>
            <h1>TESTIMONIAL</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{justifyContent:"center"}}>

                    <Paper style={{
                        // width: "70%",
                        height: "400px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blueviolet",
                         padding:"40px"
                    }}>
                        <Typography style={{ fontSize: "30px" }}><b>{props.item.description}</b></Typography>
                        <p className={classes.commentsName}>{props.item.name}</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}