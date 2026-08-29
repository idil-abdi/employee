import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useCreateEmployee } from "../hooks/useCreateEmployee";
import { useState } from "react";
import {
  type CreateEmployeeDto,
  type EmployeeFormProps,
} from "../types/Employee";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";
import { useGetEmployee } from "../hooks/useGetEmployee";

function Form({ employeeId, onSuccess }: EmployeeFormProps) {
  const isEditMode = Boolean(employeeId);
  const { data: employeeData, isLoading: isFetching } =
    useGetEmployee(employeeId);

  const {
    mutate: createEmployee,
    isPending: isCreating,
    error: createError,
  } = useCreateEmployee();

  const {
    mutate: updateEmployee,
    isPending: isUpdating,
    error: updateError,
  } = useUpdateEmployee();

  const [formData, setFormData] = useState<CreateEmployeeDto>(() => ({
    firstName: employeeData?.firstName ?? "",
    lastName: employeeData?.lastName ?? "",
    address: employeeData?.address ?? "",
    dateOfBirth: employeeData?.dateOfBirth ?? "",
    hireDate: employeeData?.hireDate ?? "",
    email: employeeData?.email ?? "",
    mobileNumber: employeeData?.mobileNumber ?? "",
    department: employeeData?.department ?? "",
    description: employeeData?.description ?? "",
  }));

  const formatDateForInput = (dateValue?: string | Date | null): string => {
    if (!dateValue) return "";
    if (typeof dateValue === "string") {
      return dateValue.split("T")[0];
    }
    return dateValue.toISOString().split("T")[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditMode && employeeId) {
      updateEmployee(
        { id: employeeId, data: formData },
        { onSuccess: () => onSuccess?.() },
      );
    } else {
      createEmployee(formData, {
        onSuccess: () => onSuccess?.(),
      });
    }
  };

  // Only show loader if fetching data during edit mode
  if (isFetching && isEditMode) {
    return <CircularProgress />;
  }

  const isPending = isCreating || isUpdating;
  const error = createError || updateError;

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
        value={formData.firstName}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        fullWidth
        value={formatDateForInput(formData.dateOfBirth)}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Hire Date"
        name="hireDate"
        type="date"
        fullWidth
        value={formatDateForInput(formData.hireDate)}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />
      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        fullWidth
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <Box sx={{ gridColumn: { sm: "span 2" } }}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </Box>

      {error && (
        <Box sx={{ gridColumn: { sm: "span 2" }, color: "error.main" }}>
          {(error as Error).message || "Something went wrong"}
        </Box>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={isPending}
        sx={{ gridColumn: { sm: "span 2" } }}
      >
        {isPending
          ? "Saving..."
          : isEditMode
            ? "Update Employee"
            : "Create Employee"}
      </Button>
    </Box>
  );
}

export default Form;
