import { Box, Button, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import CardContainer from "../componants/CardContainer";
import { Link } from "react-router-dom";

function Employee() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <h1>Employee Page</h1>
          <Button variant="contained">
            <Link to={"/employee-form"}>Add Employee</Link>
          </Button>
        </Box>
        <CardContainer />
      </Box>
    </>
  );
}

export default Employee;
