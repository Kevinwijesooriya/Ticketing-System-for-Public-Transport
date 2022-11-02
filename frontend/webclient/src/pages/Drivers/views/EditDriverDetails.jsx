import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const EditDriverDetails = () => {
  return (
    <>
      <Grid padding="12px">
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="700"
          sx={{ color: (theme) => theme.palette.tsColors.ts_mid_green }}
        >
          SCHEDULE UPDATE
        </Typography>
      </Grid>
      <Box padding="24px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Router ID</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Start Destination</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">End Destination</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Arrival Time</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Departure Time</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Bus Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Available Dates</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            padding="24px"
          >
            <Button>Save Changes</Button>
            <Button component={Link} to="/ts/route-schedule/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditDriverDetails;
