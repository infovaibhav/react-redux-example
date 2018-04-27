import React, { Component } from 'react';
import MessagePanel from './MessagePanel';
import Dashboard from './Dashboard'
import LoginPanel from './LoginPanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MainPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitCount: 0,
            userName: '',
            emptyUserName: false,
            password: '',
            emptyPassword: false,
            loginSuccess: false,
            invalidLoginMsg: false,
            message: 'Submit Attempts'
        };
    }

    handleSubmit = () => {
        let emptyUserName = false;
        let emptyPassword = false;
        if(this.state.userName === '') {
            emptyUserName = true;
        }
        if(this.state.password === '') {
            emptyPassword = true;
        }

        if(emptyUserName === true || emptyPassword === true) {
            this.setState({
                emptyUserName: emptyUserName,
                emptyPassword: emptyPassword,
                invalidLoginMsg: false
            });
            return;
        }

        if( this.state.userName === 'admin' && this.state.password === 'admin') {
            this.setState({
                submitCount: this.state.submitCount + 1,
                userName: '',
                password: '',
                loginSuccess: true,
                invalidLoginMsg: false,
                message: 'Welcome Admin  - Total Attempts'
            });
        } else {
            this.setState({ submitCount: this.state.submitCount + 1, invalidLoginMsg: true,
                emptyUserName: false,
                emptyPassword: false });
        }
    }

    handleOnChangeUsername = (e) => {
        let emptyUserName = true;
        if(e.target.value.length > 0) {
            emptyUserName = false;
        }
        this.setState({
            userName: e.target.value,
            emptyUserName: emptyUserName
        });
    }

    handleOnChangePassword = (e) => {
        let emptyPassword = true;
        if(e.target.value.length > 0) {
            emptyPassword = false;
        }
        this.setState({
            password: e.target.value,
            emptyPassword: emptyPassword
        });
    }

    handleReset = () => {
        this.setState({
            userName: '',
            password: '',
            emptyUserName: false,
            emptyPassword: false,
            invalidLoginMsg: false
        });
    }

    render() {
        let panel = null;
        if(this.state.loginSuccess === false) {
            panel = <LoginPanel handleSubmit={this.handleSubmit} handleReset={this.handleReset} userName={this.state.userName} password={this.state.password} handleOnChangeUsername={this.handleOnChangeUsername} handleOnChangePassword={this.handleOnChangePassword} emptyUserName={this.state.emptyUserName} emptyPassword={this.state.emptyPassword} invalidLoginMsg={this.state.invalidLoginMsg}></LoginPanel>;
        } else {
            panel = <Dashboard/>
        }
        return (
            <MuiThemeProvider>
                <div id='mainPanel'>
                    <h1 style={{textAlign: 'center'}}>My Company</h1>
                    <hr></hr>
                    <MessagePanel count={this.state.submitCount} message={this.state.message} clickEvent={this.handleSubmit}>
                    </MessagePanel>
                    <hr></hr>
                    {panel}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MainPanel;