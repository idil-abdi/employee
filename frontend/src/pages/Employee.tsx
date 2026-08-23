import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";

function Employee() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1>Employee Page</h1>
      </Box>
    </>
  );
}

export default Employee;
