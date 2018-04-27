import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class LoginPanel extends Component {

    render() {
        let invalidLoginMsg = null
        let emptyUserNameMsg = null;
        let emptyPasswordMsg = null;

        if(this.props.invalidLoginMsg === true) {
            invalidLoginMsg = <div style={{color: 'red', fontSize: '12px'}}>Invalid Credentials</div>
        }
        if(this.props.emptyUserName === true) {
            emptyUserNameMsg = 'Please enter Username';
        }
        if(this.props.emptyPassword) {
            emptyPasswordMsg = 'Please enter password';
        }

        return (
            <div id='login'>
                <div style={{ margin: 12 }}>
                <div>
                    <h4>Login</h4>
                </div>
                <div style={{ paddingBottom: 5 }} >
                    {invalidLoginMsg}
                </div>
                <Paper zDepth={2}>
                    <TextField style={{ margin: 12 }} floatingLabelText="User name" errorText={emptyUserNameMsg} value={this.props.userName} onChange={this.props.handleOnChangeUsername} />
                    <Divider />
                    <TextField style={{ margin: 12 }} floatingLabelText="Password" errorText={emptyPasswordMsg} value={this.props.password} onChange={this.props.handleOnChangePassword} type="password"/>
                    <Divider />
                </Paper>
                <div>
                    <RaisedButton label="Reset" secondary={true} style={{ margin: 12 }} onClick={this.props.handleReset} />
                    <RaisedButton label="Submit" primary={true} style={{ margin: 12 }} onClick={this.props.handleSubmit} />
                </div>
                </div>
            </div>
        );
    }
}
export default LoginPanel;