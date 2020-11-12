
import React, { Component } from 'react'
import useStyles from "./styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


// import axios from "axios"


const styles = theme => ({
    RequestTitle: {
        fontSize: "25px !important",
        paddingTop: "20px",
        color: "maroon"
    },
    PersonalDetails: {
        textAlign: "left",
        paddingLeft: "30px",
        fontSize: "20px",
        color: "dimgrey"
    },
    RequestSubTitle: {
        color: "darkorange",
        paddingBottom: "20px",
        fontSize: "16px",
        textAlign: "center"
    },
    SubmitButton: {
        marginTop: "40px"
    }
})


class Request extends Component {

    state = {
        formData: {
            email: '',
            password: '',
            name: "",
            number: "",
            email: "",
            address: " ",
            sent: false,

        },
        submitted: false,
    }



    //Handel inputs


    handelName = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    handelNumber = (e) => {
        this.setState({
            number: e.target.value
        })

    }

    handelEmail = (e) => {
        this.setState({
            email: e.target.value
        })

    }

    handelAddress = (e) => {
        this.setState({
            address: e.target.value
        })

    }
    //End of handel inputs

    formSubmit = (event) => {
        event.preventDefault();

        let data = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            address: this.state.address,
        }

        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        // axios.post('/api/forma', data)
        //     .then(res => {
        //         this.setState({
        //             sent: true,
        //         })
        //         // }, this.resetForm())
        //     }).catch(() => {
        //         console.log('message not sent')
        //     })
        // console.log({ data })
    }


    //For resenting intial data

    resetForm = () => {
        this.setState({
            name: "",
            number: "",
            email: "",
            address: " ",
        })

        setTimeout(() => {
            this.setState({
                sent: true,
            })
        }, 3000)
    }

    render() {
        var { classes } = this.props;
        const { formData, submitted } = this.state;

        return (
            <div className="contact-block">
                <Typography className={classes.RequestTitle}>Get in touch with us....</Typography>
                <Divider style={{ margin: "20px" }} />
                <Typography className={classes.RequestSubTitle}>We would love to hear from you! Please fill out this form and we will get in touch with you shortly.</Typography>
                {/* <div>
                    <Typography className={classes.PersonalDetails}><b>Personal Details</b></Typography>
                </div> */}
                <ValidatorForm ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <div style={{ padding: "15px" }}>
                        <div className="form-group">
                            <Typography className={classes.PersonName}>First Name *</Typography>
                            <TextValidator
                                name="name"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.name}
                                onChange={this.handelName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <Typography className={classes.PersonName}>Last Name *</Typography>
                            <TextValidator
                                name="name"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.name}
                                onChange={this.handelName}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <Typography className={classes.PersonName}>Contact Number</Typography>
                            <TextValidator
                                name="number"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.number}
                                onChange={this.handelNumber}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <Typography className={classes.PersonName}>Email *</Typography>
                            <TextValidator
                                name="email"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.email}
                                onChange={this.handelEmail}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </div>

                        <div className="form-group">
                            <Typography className={classes.PersonName}>Website</Typography>
                            <TextValidator
                                name="address"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.address}
                                onChange={this.handelAddress}
                            />
                        </div>
                        <div className="form-group">
                            <Typography className={classes.PersonName}>Comments</Typography>
                            <TextValidator
                                // label="Multiline"
                                multiline
                                rows={6}
                                name="address"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ width: "85%" }}
                                value={this.state.address}
                                onChange={this.handelAddress}
                            />
                        </div>
                    </div>
                    <div style={{ padding: "0px 30px 30px 30px" }}>
                        {/* <div className={this.state.sent ? "msg msgAppear" : 'msg'}> message has been sent</div> */}
                        <div className="btn-submit">
                            <Button variant="contained"
                                color="primary"
                                // className={classes.SubmitButton}
                                style={{ width: "300px" }}
                                type="submit"
                                disabled={submitted}
                                onClick={this.formSubmit}
                            >
                                <b> {
                                    (submitted && 'Your form is submitted!')
                                    || (!submitted && 'Submit')
                                }
                                </b>
                            </Button>
                        </div>
                        <Typography style={{ color: "darkgray", textAlign: "center", fontSize: "12px", paddingTop: "10px" }}>Your Privacy Matters!</Typography>
                    </div>
                </ValidatorForm>
            </div>
        )
    }
}
Request.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Request);
