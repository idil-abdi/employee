import { Box, Button, TextField } from "@mui/material";
import { useCreateEmployee } from "../hooks/useCreateEmployee";
import { useState } from "react";
import { type CreateEmployeeDto } from "../types/Employee";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    mutate: createEmployee,
    isPending,
    isError,
    error,
  } = useCreateEmployee();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateEmployeeDto>({
    firstName: "",
    lastName: "",
    address: "",
    dateOfBirth: "",
    hireDate: "",
    email: "",
    mobileNumber: "",
    department: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createEmployee(formData);
    navigate("/employee");
  };

  return (
    <>
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
          required
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          fullWidth
          value={formData.dateOfBirth}
          onChange={handleChange}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Hire Date"
          name="hireDate"
          type="date"
          fullWidth
          value={formData.hireDate}
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
          required
        />
        <TextField
          fullWidth
          label="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
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
          />
        </Box>

        {isError && (
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
          {isPending ? "Submitting..." : "Create Employee"}
        </Button>
      </Box>
    </>
  );
}

export default Form;
