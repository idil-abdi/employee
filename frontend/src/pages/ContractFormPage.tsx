import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import ContractForm from "../componants/ContractForm";

function ContractFormPage() {
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
          <h1>Edit Contract Form</h1>
          <Box sx={{ py: 3 }}>
            <ContractForm />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContractFormPage;
