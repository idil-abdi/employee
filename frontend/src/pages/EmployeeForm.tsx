import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import Form from "../componants/Form";

function EmployeeForm() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            mb: 3,
          }}
        >
          <h1>Create an Employee</h1>
          <Box sx={{ py: 3 }}>
            <Form />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EmployeeForm;
