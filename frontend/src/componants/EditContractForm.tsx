import {
  Box,
  Button,
  // Checkbox,
  // FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import type { Contract, UpdateContractDto } from "../types/Contract";
import { useState } from "react";

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

type EditContractFormProps = {
  initialData: Contract;
  onSubmit: (data: UpdateContractDto) => void;
  isPending: boolean;
};

function EditContractForm({
  initialData,
  onSubmit,
  isPending,
}: EditContractFormProps) {
  const [formData, setFormData] = useState<UpdateContractDto>({
    title: initialData.title || "",
    contractType: initialData.contractType || "FULL_TIME",
    salary: initialData.salary || 0,
    weeklyHours: initialData.weeklyHours || 0,
    startDate: initialData.startDate || "",
    endDate: initialData.endDate || "",
  });

  // const [isOngoing, setIsOngoing] = useState(!initialData.endDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value,
    }));
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const checked = e.target.checked;
  //   setIsOngoing(checked);
  //   if (checked) {
  //     setFormData((prev) => ({ ...prev, endDate: "" }));
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
        value={formData.endDate}
        onChange={handleChange}
        // disabled={isOngoing}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      {/* <FormControlLabel
        sx={{
          gridColumn: { sm: "span 2" },
          display: "flex",
          justifyContent: "flex-end",
        }}
        control={
          <Checkbox
            checked={isOngoing}
            onChange={handleCheckboxChange}
          />
        }
        label="On Going"
      /> */}

      <Button
        type="submit"
        variant="contained"
        disabled={isPending}
        sx={{ gridColumn: { sm: "span 2" } }}
      >
        {isPending ? "Updating..." : "Update CONTRACT"}
      </Button>
    </Box>
  );
}

export default EditContractForm;
