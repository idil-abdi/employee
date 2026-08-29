import { Box, Toolbar } from "@mui/material";
import Navbar from "../componants/Navbar";
import EditForm from "../componants/EditForm";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployeePage() {
  const { employeeId } = useParams<{ employeeId: string }>();

  console.log(employeeId);

  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/employee");
  };
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
          <h1>Edit Employee</h1>
          <Box sx={{ py: 3 }}>
            <EditForm
              key={employeeId}
              employeeId={employeeId}
              onSuccess={handleSuccess}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EditEmployeePage;
