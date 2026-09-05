import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import CreateForm from "../componants/CreateForm";
import Footer from "../componants/Footer";

function EmployeeForm() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Box
            sx={{
              mb: 3,
            }}
          >
            <h1 className="text-3xl text-blue-900 text-center">
              Create an Employee
            </h1>
            <Box sx={{ py: 3 }}>
              <CreateForm />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default EmployeeForm;
