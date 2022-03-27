import App from "./App";
import passport from 'passport';
import React, { Component } from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Login } from "@mui/icons-material";
import API from "./Auth";

 

// MaterialUI Components

// React APIs 


const styles = {
    button: {
        marginTop: "1rem"
    }
}

export default class LoginPage extends Component {

    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmitForm = () => {
        let newLogin = {
            email : this.state.email,
            password : this.state.password
        }
        API.login(newLogin).then(res => console.log(res)).catch(err => console.log(err));
    };

    handleGoogleLogin = () => {
        fetch("/api/auth/google", {mode: 'no-cors'})
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
            <form noValidate autoComplete="off">
                <div>
                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    margin="normal"
                />
                </div>
                <div>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    margin="normal"
                    />
                </div>
                <Button
                    onClick={this.handleSubmitForm}
                    style={styles.button}
                    variant="outlined"
                    size="small">Login</Button>
                <Button
                    onClick={this.handleGoogleLogin}
                    style={styles.button}
                    variant="outlined"
                    size="small">Google Login</Button>
            </form>
            <div>
                <a type="button" className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-sizeSmall" href="/api/auth/google">Google A Tag</a>
            </div>
            </div>
        )
    }
}