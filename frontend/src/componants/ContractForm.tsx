import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useCreateEmployeeContracts } from "../hooks/useCreateEmployeeContract";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { type CreateEmployeeContractDto } from "../types/Contract";

const contractTypeOptions = [
  {
    value: "FULL_TIME",
    title: "FULL_TIME",
  },
  {
    value: "PART_TIME",
    title: "PART_TIME",
  },
  {
    value: "CONTRACT",
    title: "CONTRACT",
  },
];

function ContractForm() {
  const { employeeId } = useParams<{ employeeId: string }>();
  const navigate = useNavigate();

  const {
    mutate: createContract,
    isPending,
    isError,
    error,
  } = useCreateEmployeeContracts();

  const [isOngoing, setIsOngoing] = useState(false);
  const [formData, setFormData] = useState<CreateEmployeeContractDto>({
    title: "",
    contractType: "",
    startDate: "",
    salary: 0,
    weeklyHours: 40,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!employeeId) return;

    // Execute mutation passing both employeeId and contract payload
    createContract(
      {
        employeeId,
        contract: {
          ...formData,
          endDate: isOngoing ? "" : formData.endDate,
        },
      },
      {
        onSuccess: () => {
          navigate("/employee");
        },
      },
    );
  };

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
      {isError && (
        <Alert severity="error" sx={{ gridColumn: { sm: "span 2" } }}>
          {error?.message || "Failed to create contract"}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextField
        select
        fullWidth
        name="contractType"
        label="Contract Type"
        value={formData.contractType}
        onChange={handleChange}
      >
        {contractTypeOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label="Salary"
        name="salary"
        type="number"
        value={formData.salary}
        onChange={handleChange}
        required
      />

      <TextField
        fullWidth
        label="Hours per week"
        name="weeklyHours"
        type="number"
        value={formData.weeklyHours}
        onChange={handleChange}
        required
      />

      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        fullWidth
        value={formData.startDate}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />

      <TextField
        label="End Date"
        name="endDate"
        type="date"
        fullWidth
        disabled={isOngoing}
        value={isOngoing ? "" : formData.endDate}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <FormControlLabel
        sx={{
          gridColumn: { sm: "span 2" },
          display: "flex",
          justifyContent: "flex-end",
        }}
        control={
          <Checkbox
            checked={isOngoing}
            onChange={(e) => setIsOngoing(e.target.checked)}
          />
        }
        label="On Going"
      />

      <Button
        type="submit"
        variant="contained"
        disabled={isPending}
        sx={{ gridColumn: { sm: "span 2" } }}
      >
        {isPending ? "CREATING..." : "CREATE CONTRACT"}
      </Button>
    </Box>
  );
}

export default ContractForm;
