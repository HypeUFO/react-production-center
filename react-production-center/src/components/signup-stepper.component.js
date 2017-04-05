import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class SignUp extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Create An Account</StepLabel>
            <StepContent>
              <TextField
                hintText="Enter your email address"
                errorText="This field is required"
                floatingLabelText="Email"
                floatingLabelFixed={true}
              />
              <TextField
                type="password"
                hintText="Enter a password"
                errorText="This field is required"
                floatingLabelText="Password"
                floatingLabelFixed={true}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>User Info</StepLabel>
            <StepContent>
              <p>To use this app, you must provide the information on record with the DMV</p>
              <TextField
                hintText="enter name on your license"
                errorText="This field is required"
                floatingLabelText="Name (first and last)"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your driver's license no."
                errorText="This field is required"
                floatingLabelText="Driver's license no."
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your vin no."
                errorText="This field is required"
                floatingLabelText="Vin no."
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your car make"
                errorText="This field is required"
                floatingLabelText="Car make"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your car model"
                errorText="This field is required"
                floatingLabelText="Car model"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your car year"
                errorText="This field is required"
                floatingLabelText="Car year"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="enter your car color"
                errorText="This field is required"
                floatingLabelText="Car color"
                floatingLabelFixed={true}
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Payment Info</StepLabel>
            <StepContent>
              <p>
                Save a credit/debit card or link your paypal
              </p>
              <TextField
                hintText="name on card"
                errorText="This field is required"
                floatingLabelText="Name"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="card no."
                errorText="This field is required"
                floatingLabelText="Card no."
                floatingLabelFixed={true}
              />
              <TextField
                hintText="expiration date"
                errorText="This field is required"
                floatingLabelText="Expiration date"
                floatingLabelFixed={true}
              />
              <TextField
                hintText="3 digit secutiy code"
                errorText="This field is required"
                floatingLabelText="3 digit secutiy code"
                floatingLabelFixed={true}
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Welcome to Meter!
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default SignUp;