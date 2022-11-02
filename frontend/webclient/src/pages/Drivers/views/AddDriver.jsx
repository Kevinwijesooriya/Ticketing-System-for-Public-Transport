import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

const AddDriver = () => {
  const [open, setOpen] = React.useState(false);
  const [userID, setUserID] = useState("");
  const [driverName, setDriverName] = useState("");
  const [dEmail, setDEmail] = useState("");
  const [dPhoneNumber, setDPhoneNumber] = useState("");
  const [dPassword, setDPassword] = useState("");
  const [dAddress, setDAddress] = useState("");
  const [dNic, setDNic] = useState("");
  const [dBusNo, setDBusNo] = useState("");
  const [error, setError] = React.useState({ message: "", field: "" });

  function sendData(e) {
    e.preventDefault();

    const newPost = {
      driverName,
      dEmail,
      dPhoneNumber,
      dPassword,
      dAddress,
      dNic,
      dBusNo,
    };
    if (isValid()) {
      axios
        .post("http://localhost:5000/api/driver/register", newPost)
        .then((res) => {
          console.log(res);
          setOpen(true);
          setDriverName("");
          setDEmail("");
          setDPhoneNumber("");
          setDPassword("");
          setDAddress("");
          setDNic("");
          dBusNo("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const isValid = () => {
    if (driverName === "") {
      setError({ field: "Name", message: "Please fill me" });
      return false;
    }
    if (dEmail === "") {
      setError({ field: "E-mail", message: "Please fill me" });
      return false;
    }
    return true;
  };

  return (
    <>
      <Grid padding="12px">
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="700"
          sx={{ color: (theme) => theme.palette.tsColors.ts_mid_green }}
        >
          ADD A DRIVER
        </Typography>
      </Grid>
      <Box padding="24px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Name</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDriverName(e.target.value);
                setError({ field: "", message: "" });
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Email</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Phone Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDPhoneNumber(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Password</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Address</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDAddress(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">NIC</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDNic(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Bus Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setDBusNo(e.target.value);
              }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            padding="24px"
          >
            <Button onClick={sendData}>REgister Driver</Button>
            <Button component={Link} to="/ts/route-driver/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddDriver;
