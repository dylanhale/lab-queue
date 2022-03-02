import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Grid } from "@mui/material";

const LandingPage = props => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="top"
            style={{ minHeight: '80vh' }}
        >
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 700 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                    Queue View
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
      );
}
export default LandingPage