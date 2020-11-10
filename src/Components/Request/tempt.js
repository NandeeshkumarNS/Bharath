
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


import axios from "axios"


const styles = theme => ({
    RequestTitle: {
        fontSize: "25px",
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
        fontSize: "13px"
    },
    SubmitButton: {
        marginTop: "40px"
    }
})


class Request extends Component {

    state = {
        name: "",
        number: "",
        email: "",
        address: " ",
        sent: false,
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

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            address: this.state.address,
        }

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                })
                // }, this.resetForm())
            }).catch(() => {
                console.log('message not sent')
            })
        console.log({ data })
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
            <div style={{ width: "60%", textAlign: "center", border: "1px solid rosybrown" }}>
                <Typography className={classes.RequestTitle}>Request For House & Building Construction</Typography>
                <Divider style={{ margin: "20px" }} />
                <Typography className={classes.RequestSubTitle}>Fill & Submitt this form, And our team will connect you ASAP</Typography>
                <div>
                    <Typography className={classes.PersonalDetails}><b>Personal Details</b></Typography>
                </div>
                <ValidatorForm  ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <div style={{ padding: "30px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography className={classes.PersonName}>Name *</Typography>
                            <TextValidator
                                name="name"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                                value={this.state.name}
                                onChange={this.handelName}
                                required
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Contact Number *</Typography>
                            <TextValidator
                                name="number"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                                value={this.state.number}
                                onChange={this.handelNumber}
                                required
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Email *</Typography>
                            <TextValidator
                                name="email"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                                value={this.state.email}
                                onChange={this.handelEmail}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Address *</Typography>
                            <TextValidator
                                name="address"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                                value={this.state.address}
                                onChange={this.handelAddress}
                            />
                        </div>
                    </div>
                    <div style={{ padding: "0px 30px 30px 30px" }}>
                        <div>
                            <Typography className={classes.PersonalDetails}><b>Personal Details</b></Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Construction Type *</Typography>
                            <FormControl variant="outlined" className={classes.formControl} style={{ paddingRight: "30px" }}>
                               <Select
                                    native
                                    style={{ paddingRight: "30px", width: "350px", height: "35px" }}
                                    // label="Age"  
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}> House Construction</option>
                                    <option value={20}>Compound Wall Construction</option>
                                    <option value={30}>Commercial Construction</option>
                                    <option value={40}>Other Construction </option>
                                    <option value={50}>Carpentry & Woodwork </option>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Number Of Floore *</Typography>
                            <TextField
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Land Location *</Typography>
                            <TextField
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Land area in sq Feet *</Typography>
                            <TextField
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Budget Estimate *</Typography>
                            <TextField
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Need Plan *</Typography>
                            <div>
                                <TextField
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    className={classes.TextField}
                                    variant="outlined"
                                    style={{ paddingRight: "30px", width: "350px" }}
                                />
                                <Typography style={{ textAlign: "left" }} >Type yes or no </Typography>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                            <Typography className={classes.PersonName}>Other Information *</Typography>
                            <TextField
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.TextField}
                                variant="outlined"
                                style={{ paddingRight: "30px", width: "350px" }}
                            />
                        </div>
                        {/* <div className={this.state.sent ? "msg msgAppear" : 'msg'}> message has been sent</div> */}
                        <div style={{ paddingTop: "30px" }}>
                            <Button variant="contained"
                                color="primary"
                                className={classes.SubmitButton}
                                type="submit"
                                disabled={submitted}
                                onClick={this.formSubmit}
                            >
                                {
                                    (submitted && 'Your form is submitted!')
                                    || (!submitted && 'Submit')
                                }
                            </Button>
                        </div>
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

