import { AppBar, Button, Drawer, IconButton, MenuItem, Toolbar } from "@mui/material";
import { Component } from "react";
import React from "react";
import LandingPage from "./LandingPage";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Admin from "./Admin";
import App from "./App";
import Grades from "./Grades";
import QueueView from "./QueueView";

const pages = ['Testing Pages', 'Admin', 'Grades', 'Hidden', 'QueueView']

var element = document.body;
element.style.backgroundColor = "lightgrey";

var AWS = require("aws-sdk");
AWS.config.region = 'us-east-1';

function signinCallback(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    document.getElementById('profile-email').innerHTML = profile.getEmail();
    document.getElementById('profile-name').innerHTML = profile.getName();
    document.getElementById('profile-image').setAttribute('src', profile.getImageUrl());
    document.getElementById('profile-card').hidden = false;
    document.getElementById('signin-button').hidden = true;
    document.querySelector('.fruit-list').hidden = false;

    AWS.config.credentials = new AWS.WebIdentityCredentials({
       RoleArn: 'ROLE_ARN',
       ProviderId: null, // this is null for Google
       WebIdentityToken: googleUser.getAuthResponse().id_token
    });

    // Obtain AWS credentials
    AWS.config.credentials.get(async function(){
    // Access AWS resources here.
        var accessKeyId = AWS.config.credentials.accessKeyId;
        var secretAccessKey = AWS.config.credentials.secretAccessKey;
        var sessionToken = AWS.config.credentials.sessionToken;

        const response = await fetch('http://localhost:8000/fruits', {
            method: 'POST',
            body: JSON.stringify({
                'AccessKeyId': accessKeyId,
                'SecretAccessKey': secretAccessKey,
                'SessionToken': sessionToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const myJson = await response.json(); //extract JSON from the http response
            const fruits = JSON.parse(myJson['fruits']);
            console.log(typeof fruits);
            console.log(fruits);

            var str = ''
            var arrayLength = fruits.length;
            for (var i = 0; i < arrayLength; i++) {
                str += '<li class="list-group-item d-flex justify-content-between align-items-center">' + fruits[i]['name'] +
                        '<button type="button" class="btn btn-primary position-relative">$' + fruits[i]['price'] +
                        '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">\n' +
                        fruits[i]['quantity'] +
                        '</span>' +
                        '</button></li>'
                // str += '<li class="list-group-item d-flex justify-content-between align-items-center">' + fruits[i]['name'] + ' <b>Price: $' + fruits[i]['price'] + '</b> ' + '<span class="badge bg-primary rounded-pill">' + fruits[i]['quantity'] + '</span></li>'
            }
            document.getElementById('fruit-list').innerHTML = str;

    });

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById('profile-card').hidden = true;
        document.getElementById('fruit-list').innerHTML = null;
        document.getElementById('signin-button').hidden = false;
    });
}

class Main extends Component{

    
    constructor(props) {
        super(props)
        this.state = {
            lab: 'landing',
            openDrawer: false,
            user: null
        }
        this.adminClick = this.adminClick.bind(this)
        this.tempClick = this.tempClick.bind(this)
        this.gradesClick = this.gradesClick.bind(this)
        this.hiddenClick = this.hiddenClick.bind(this)
        this.queueClick = this.queueClick.bind(this)
    }
    
    adminClick(){
        this.setState({lab: 'admin'})
            console.log("ADMIN WORKED")
    }

    tempClick(){
        this.setState({lab: 'landing'})
            console.log("Landing Worked")
    }

    gradesClick(){
        this.setState({lab: 'grades'})
            console.log("Grades WORKED")
    }

    hiddenClick(){
        this.setState({lab: 'hidden'})
            console.log("Hidden WORKED")
    }

    queueClick(){
        this.setState({lab: 'queue'})
            console.log("Hidden WORKED")
    }

    handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer })

    handleDrawerAndClose = val =>
        this.setState({
            openDrawer: false,
            lab: val
        })

    renderPageBasedOnSlider() {
        switch(this.state.lab){
            case 'admin':
                return <Admin />
            case 'landing':
                return <LandingPage />
            case 'grades':
                return <Grades />
            case 'hidden':
                return <App />
            case 'queue':
                return <QueueView />
            default:
                return <LandingPage />
        }
    }



    render() {
        return(
            <div className="app">
                <AppBar position="static" style={{ background: '#2E3B55'}}>
                    <Container maxWidth="x1">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                Adler Labs TESTING
                                
                            </Typography>
                                
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                                
                                <Button        
                                    onClick={this.tempClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    Landing Page
                                </Button>
                                
                                <Button        
                                    onClick={this.gradesClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    Grades
                                </Button>

                                <Button        
                                    onClick={this.adminClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    Admin
                                </Button>
                                <Button        
                                    onClick={this.queueClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    Queue
                                </Button>
                            </Box>
                            <Button
                                color="inherit"
                            >
                                Login (Will redirect to google login)
                            </Button>

                        </Toolbar>
                    </Container>
                </AppBar>
                {this.renderPageBasedOnSlider()}
            </div>
        )
    }
}

export default Main