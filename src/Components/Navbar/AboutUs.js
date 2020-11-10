
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
// import examplePage from '../HomeComponents/examplePage'

import { withStyles } from '@material-ui/styles';

const styles = theme => ({

})

class AboutUs extends React.Component {
    render() {
        var { classes } = this.props;
        return (
            <div className="middle-level-section" style={{ padding: "30px" }}>
                <Typography><h1>About Us</h1></Typography>
                <Typography>
                    We are a rapidly growing team of certified and experienced professionals with a vision of helping industries to reach their desired marketing goals.
                    We aim to provide reliable data and empower you to make smarter data-driven decisions for your business.
                    Our mission lies in adding value to business operations by increasing productivity and efficiency, without compromising on our service quality.
                    For more than 5 years,Vertex Lists has been a leading provider of end to end database solutions for businesses worldwide. We have helped more than 4000+ clients to not only grow their lead database but also immensely cut down on marketing costs.
                    We go the extra mile to build long- term relationships and commit to providing the best of resources for our client. The database management solutions we offer allows the businesses to extract valuable insights from their data swiftly. Align your marketing goals withVertex Lists to boost the growth and efficiency of your business. Trusted by marketing executives of start-ups and Fortune 500 companies.
                </Typography>
                <Typography><h3>Who Are We?</h3></Typography>
                <Typography>Established in 2015, we started as a small team of young professionals dedicated to providing quality Email Marketing Services and Database Solutions. Our goal is to help our clients achieve extraordinary business growth through our marketing solutions.</Typography>
                <Typography>
                    We vision ourselves grow to become a leading provider of end-to-end database solutions for businesses worldwide. We have helped more than 4000 clients to grow their lead database and immensely cut down on their marketing budget.
                </Typography>
                <Typography>
                    We take pride in being one of the trusted sources in the Industry for offering services that allow clients to communicate with their leads and achieve their goals and objectives faster.
                </Typography>
                <Typography><h3>What Do We Do?</h3></Typography>
                <Typography>
                    As a leading Data Provider, we also offer services related to Email Marketing, Lead Generation, Data Cleansing, Data Appending, Data enrichment, Website Development, Design, and more. The database management solutions we offer allows the businesses to extract valuable insights from the data swiftly and engage with their clients in a channelized way.
                </Typography>
                <Typography><h3>Why Choose Us?</h3></Typography>
                <Typography>
                    With our exceptional industry expertise, we understand what works well in the market and what doesn’t. So, we build a customized database that is just apt for your business. At Vertex lists, we go the extra mile to build long- term relationships and commit to providing the best of resources for our client. We give our customers the best customer experience in the industry. Trusted by marketing executives of start-ups and Fortune 500 companies, Vertex Lists is a well-established Data Solutions Provider for both B2B and B2C companies. Align your marketing goals with Vertex Lists to boost the growth and efficiency of your business.
                </Typography>
            </div>
        );
    }
}

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs); 