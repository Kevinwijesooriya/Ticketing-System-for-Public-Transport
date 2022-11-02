import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "../../../core/styles";
import { Button, Grid, IconButton, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  _id,
  routerId,
  startDestination,
  endDestination,
  arrivalTime,
  departureTime,
  busNumber,
  availableDates
) {
  return {
    _id,
    routerId,
    startDestination,
    endDestination,
    arrivalTime,
    departureTime,
    busNumber,
    availableDates,
  };
}

const rows = [
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
  createData(
    "RID0012",
    "RID0012",
    "Malabe",
    "Kaduwela",
    "11:20 am",
    "11:50 am",
    "NA-9898",
    "Weekdays"
  ),
];

export default function DriverDetailsView() {
  //search---------------------------------------------------------
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredRows = rows.filter((row) => {
    return (
      row.startDestination
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      row.endDestination
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      row.busNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });
  //----------------------------------------------------------------
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="12px"
      >
        <Button component={Link} to="/ts/route-driver/add">
          Add New Schedule
        </Button>
        <TextField
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Router ID</StyledTableCell>
              <StyledTableCell align="right">Start Destination</StyledTableCell>
              <StyledTableCell align="right">End Destination</StyledTableCell>
              <StyledTableCell align="right">Arrival Time</StyledTableCell>
              <StyledTableCell align="right">Departure Time</StyledTableCell>
              <StyledTableCell align="right">Bus Number</StyledTableCell>
              <StyledTableCell align="right">Available Dates</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="right">{row.routerId}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.startDestination}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.endDestination}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.arrivalTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.departureTime}
                </StyledTableCell>
                <StyledTableCell align="right">{row.busNumber}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.availableDates}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      component={Link}
                      to={`/ts/route-schedule/edit/${row._id}`}
                      size="small"
                      edge="start"
                      color="inherit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" edge="start" color="inherit">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
