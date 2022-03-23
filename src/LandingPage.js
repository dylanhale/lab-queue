import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";


const LandingPage = props => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >
            <Grid>
                
                <Card sx={{ maxWidth: 445 }} style={{backgroundColor: "white"}}>
                    
                <CardMedia>
                    <img src={
                        require("./OleMissLogo.png")}
                        alt=""
                        height={"500"}
                        width={"445"}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    Welcome to the Adler Queue System
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                    Get Started
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    1) Click login located at the top right of the page
                    </Typography>
                    <Typography variant="body1" color ="text.secondary">
                    2) Login using your Ole Miss Email
                    </Typography>
                    <Typography variant="body1" color ="text.secondary">
                    3) Select which lab you are in (North or South)
                    </Typography>
                    <Typography variant="body1" color ="text.secondary">
                    4) Request help or a grade check from the lab TAs
                    </Typography>
                </CardContent>
                <Box textAlign='center'>
                    <Button size="small">Login (Might Keep Unsure)</Button>
                </Box>
                </Card>
            </Grid>
        </Grid>
      );
}
export default LandingPage