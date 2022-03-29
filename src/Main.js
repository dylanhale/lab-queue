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
import { config } from "dotenv";
import GoogleLogin from "react-google-login";

//Currently throwing error -- Cannot Resolve ATM
//import { GoogleAuth } from "google-auth-library";

const pages = ['Testing Pages', 'Admin', 'Grades', 'Hidden', 'QueueView']



var element = document.body;
element.style.backgroundColor = "lightgrey";

const handleLogin = async googleData => {
    console.log(googleData)
    const res = await fetch("/config/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log("user profile is: ", googleData)
  }

  
  //const { OAuth2Client } = require('google-auth-library')
  //const client = new OAuth2Client(process.env.CLIENT_ID)
  /*server.post("/api/v1/auth/google", async (req, res) => {
      const { token }  = req.body
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID
      });
      const { name, email, picture } = ticket.getPayload();    
      /*const user = await db.user.upsert({ 
          where: { email: email },
          update: { name, picture },
          create: { name, email, picture }
      })
      res.status(201)
      //res.json(user)
  })*/
 
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
        this.loginClick = this.loginClick.bind(this)
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

    loginClick(){
        this.setState({lab: 'login'})
            console.log("Login Worked")
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
            case 'login':
                return <App />
                
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
                                Adler Labs Queue System
                                
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
                            <GoogleLogin
                                clientId= {"749593876344-vlsk7otog4enhchrpq2jg8q767o0d89v.apps.googleusercontent.com"}
                                buttonText="Log in with Google"
                                onSuccess={handleLogin}
                                onFailure={handleLogin}
                                cookiePolicy={'single_host_origin'}
                             />
                        </Toolbar>
                    </Container>
                </AppBar>
                {this.renderPageBasedOnSlider()}
            </div>
        )
    }
}

export default Main