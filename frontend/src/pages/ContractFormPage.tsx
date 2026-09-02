import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import ContractForm from "../componants/ContractForm";
import Footer from "../componants/Footer";

function ContractFormPage() {
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
            <h1>Edit Contract Form</h1>
            <Box sx={{ py: 3 }}>
              <ContractForm />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default ContractFormPage;
