import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import EditContractForm from "../componants/EditContractForm";
// import { useGetEmployeeContract } from "../hooks/useGetEmployeeContract";
// import { useUpdateContract } from "../hooks/useUpdateContract";
// import type { UpdateContractDto } from "../types/Contract";
import { useNavigate, useParams } from "react-router-dom";

function EditContractPage() {
  const { employeeId, contractId } = useParams<{
    employeeId: string;
    contractId: string;
  }>();

  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/employee");
  };

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
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Toolbar />
          <Box sx={{ mb: 3 }}>
            <h1 className="text-3xl text-blue-900 text-center">
              Edit Employee's Contract
            </h1>

            <Box sx={{ py: 3 }}>
              <EditContractForm
                key={contractId}
                employeeId={employeeId}
                contractId={contractId}
                onSuccess={handleSuccess}
              />
              {/* {isLoading && <CircularProgress />}
              {isError || (!isLoading && !contract) ? (
                <Typography color="error">
                  Error loading contract details.
                </Typography>
              ) : null}

              {contract && (
                <EditContractForm
                  key={contractId}
                  initialData={contract}
                  onSubmit={handleFormSubmit}
                  isPending={isPending}
                />
              )} */}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default EditContractPage;
