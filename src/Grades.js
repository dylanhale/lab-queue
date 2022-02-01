import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Grid } from "@mui/material";
import Main from "./Main";

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
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    This is where the grades will be later on
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
      );
}
export default LandingPage