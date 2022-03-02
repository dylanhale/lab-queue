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
                    <Typography gutterBottom variant="h5" component="div">
                    Landing Page
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    1) Click login at the bottom of the instructions or at the top right of the page
                    </Typography>
                    <Typography variant="body2" color ="text.secondary">
                    2) Login using your Ole Miss Email
                    </Typography>
                    <Typography variant="body2" color ="text.secondary">
                    3) Select which lab you're in using the buttons above the queue
                    </Typography>
                    <Typography variant="body2" color ="text.secondary">
                    4) Request help or a grade check from the lab TAs
                    </Typography>
                </CardContent>
                <Box textAlign='center'>
                    <Button size="small">Login (Will redirect to Google Login)</Button>
                </Box>
                </Card>
            </Grid>
        </Grid>
      );
}
export default LandingPage