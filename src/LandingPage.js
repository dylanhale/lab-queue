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
                
                <Card sx={{ maxWidth: 445 }}>
                <CardMedia>
                    <img src={
                        require("./joey.jpg")}
                        alt=""
                        height={"600"}
                        width={"445"}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Landing Page
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Gotta type out instructions at some point and add main image
                    </Typography>
                </CardContent>
                <Box textAlign='center'>
                    <Button size="small">Login</Button>
                </Box>
                </Card>
            </Grid>
        </Grid>
      );
}
export default LandingPage