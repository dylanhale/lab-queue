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

const pages = ['Testing Pages', 'Admin', 'Grades', 'Hidden']

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

    handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer })

    handleDrawerAndClose = val =>
        this.setState({
            openDrawer: false,
            lab: val
        })

    renderPageBasedOnSlider() {
        /*if(this.state.user){
            switch (this.state.lab){
                case 'admin':
                    return <Admin />
                default:
                    return (
                        <App
                            user={this.state.user}
                        />
                    )
            }
        }
        else {
            return <LandingPage />
        }*/
        switch(this.state.lab){
            case 'admin':
                return <Admin />
            case 'landing':
                return <LandingPage />
            case 'grades':
                return <Grades />
            case 'hidden':
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
                                Adler Labs TESTING
                                
                            </Typography>
                                
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                                
                                <Button        
                                    onClick={this.tempClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    TESTING
                                    Return to Landing
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
                                    onClick={this.hiddenClick}
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                >
                                    Hidden
                                </Button>
                                
                            </Box>
                            <Button color="inherit">Login Testing</Button>

                        </Toolbar>
                    </Container>
                </AppBar>
                {this.renderPageBasedOnSlider()}
            </div>
        )
    }
}

export default Main