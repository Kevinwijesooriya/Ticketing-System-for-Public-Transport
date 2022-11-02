import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RouteScheduleAPI from "../../../core/services/RouteScheduleAPI";
import { StyledTableCell } from "../../../core/styles";

export default function RouteScheduleView() {
  const [callback, setCallback] = React.useState(false);
  const [routeSchedules, setRouteSchedules] = React.useState([]);

  async function fetchData() {
    const response = await RouteScheduleAPI.getAll();
    if (response.status === 200) {
      setRouteSchedules(response.data.data);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [callback]);

  const handleDelete = async (deleteId) => {
    try {
      const response = await RouteScheduleAPI.delete(deleteId);
      console.log("🚀 ~ response", response);
      setCallback(!callback);
      toast.success("Route Schedule Delete Success");
    } catch (error) {
      setCallback(!callback);
      toast.success("Route Schedule Delete Unsuccess");
    }
  };

  //search---------------------------------------------------------
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredRows = routeSchedules.filter((row) => {
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
        <Button component={Link} to="/ts/route-schedule/add">
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
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      onClick={() => handleDelete(row._id)}
                    >
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
