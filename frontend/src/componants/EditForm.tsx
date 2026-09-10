import { Box, Button, CircularProgress, TextField } from "@mui/material";
import {
  type EmployeeFormProps,
  type UpdateEmployeeDto,
} from "../types/Employee";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";
import { useGetEmployee } from "../hooks/useGetEmployee";

function EditForm({ employeeId, onSuccess }: EmployeeFormProps) {
  const { data: employeeData, isLoading: isFetching } =
    useGetEmployee(employeeId);

  const {
    mutate: updateEmployee,
    isPending: isUpdating,
    error: updateError,
  } = useUpdateEmployee();

  const formatDateForInput = (dateValue?: string | Date | null): string => {
    if (!dateValue) return "";
    if (typeof dateValue === "string") {
      return dateValue.split("T")[0];
    }
    return dateValue.toISOString().split("T")[0];
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const updatedData: UpdateEmployeeDto = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      address: formData.get("address") as string,
      department: formData.get("department") as string,
      description: formData.get("description") as string,
    };

    if (employeeId) {
      updateEmployee(
        { id: employeeId, data: updatedData },
        { onSuccess: () => onSuccess?.() },
      );
    }
  };

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
      }}
    >
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        defaultValue={employeeData?.firstName ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        defaultValue={employeeData?.lastName ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        fullWidth
        defaultValue={formatDateForInput(employeeData?.dateOfBirth)}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        defaultValue={employeeData?.email ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        defaultValue={employeeData?.mobileNumber ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        defaultValue={employeeData?.address ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Department"
        name="department"
        defaultValue={employeeData?.department ?? ""}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <Box sx={{ gridColumn: { sm: "span 2" } }}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={3}
          defaultValue={employeeData?.description ?? ""}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </Box>

      {updateError && (
        <Box sx={{ gridColumn: { sm: "span 2" }, color: "error.main" }}>
          {(updateError as Error).message || "Something went wrong"}
        </Box>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={isUpdating}
        sx={{ gridColumn: { sm: "span 2" } }}
      >
        {isUpdating ? "Saving..." : "Update Employee"}
      </Button>
    </Box>
  );
}

export default EditForm;
