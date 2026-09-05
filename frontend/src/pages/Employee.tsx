import { Box, Button, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import CardContainer from "../componants/CardContainer";
import { useNavigate } from "react-router-dom";
import Footer from "../componants/Footer";

function Employee() {
  const navigate = useNavigate();
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <h1 className="text-3xl text-blue-900">Our Employees</h1>
            <Button
              onClick={() => navigate(`/employee/create`)}
              variant="contained"
            >
              Add Employee
            </Button>
          </Box>
          <CardContainer />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Employee;
