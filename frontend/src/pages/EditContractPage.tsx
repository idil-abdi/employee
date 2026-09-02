import { Box, CircularProgress, Toolbar, Typography } from "@mui/material";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import EditContractForm from "../componants/EditContractForm";
import { useGetEmployeeContract } from "../hooks/useGetEmployeeContract";
import { useUpdateContract } from "../hooks/useUpdateContract";
import type { UpdateContractDto } from "../types/Contract";
import { useNavigate, useParams } from "react-router-dom";

function EditContractPage() {
  const { employeeId, contractId } = useParams<{
    employeeId: string;
    contractId: string;
  }>();

  const navigate = useNavigate();

  const {
    data: contract,
    isLoading,
    isError,
  } = useGetEmployeeContract(employeeId!, contractId!);

  const { mutate: updateContractMutation, isPending } = useUpdateContract();

  const handleFormSubmit = (updatedValues: UpdateContractDto) => {
    if (!employeeId || !contractId) return;

    updateContractMutation(
      { employeeId, contractId, contract: updatedValues },
      {
        onSuccess: () => {
          navigate("/employee");
        },
      },
    );
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
            <Typography variant="h4" component="h1">
              Edit Employee's Contract
            </Typography>

            <Box sx={{ py: 3 }}>
              {isLoading && <CircularProgress />}
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
              )}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default EditContractPage;
