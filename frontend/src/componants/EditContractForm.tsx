import {
  Box,
  Button,
  CircularProgress,
  // Checkbox,
  // FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import type { UpdateContractDto } from "../types/Contract";
import { useGetEmployeeContract } from "../hooks/useGetEmployeeContract";
import { useUpdateContract } from "../hooks/useUpdateContract";

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
  employeeId?: string;
  contractId?: string;
  onSuccess?: () => void;
};

function EditContractForm({
  employeeId,
  contractId,
  onSuccess,
}: EditContractFormProps) {
  const { data: contractData, isLoading } = useGetEmployeeContract(
    employeeId!,
    contractId!,
  );

  console.log(contractData);

  const { mutate: updateContract, isPending, error } = useUpdateContract();

  const formatDateForInput = (dateValue?: string | Date | null): string => {
    if (!dateValue) return "";
    if (typeof dateValue === "string") {
      return dateValue.split("T")[0];
    }
    return dateValue.toISOString().split("T")[0];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const updatedData: UpdateContractDto = {
      title: formData.get("title") as string,
      contractType: formData.get("contractType") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      salary: Number(formData.get("salary")),
      weeklyHours: Number(formData.get("weeklyHours")),
    };

    if (employeeId && contractId) {
      updateContract(
        {
          employeeId,
          contractId,
          contract: updatedData,
        },
        { onSuccess: () => onSuccess?.() },
      );
    }
  };

  // BEFORE:
  if (isLoading) {
    return <CircularProgress />;
  }

  // AFTER:
  if (isLoading || !contractData) {
    return <CircularProgress />;
  }

  return (
    <Box
      key={contractData ? contractId : "loading"}
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
        defaultValue={contractData?.title ?? ""}
        required
      />

      <TextField
        select
        fullWidth
        name="contractType"
        label="Contract Type"
        defaultValue={contractData?.contractType ?? ""}
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
        defaultValue={contractData?.salary ?? ""}
        required
      />

      <TextField
        fullWidth
        label="Hours per week"
        name="weeklyHours"
        type="number"
        defaultValue={contractData?.weeklyHours ?? ""}
        required
      />

      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        fullWidth
        defaultValue={formatDateForInput(contractData?.startDate)}
        slotProps={{ inputLabel: { shrink: true } }}
        required
      />

      <TextField
        label="End Date"
        name="endDate"
        type="date"
        fullWidth
        defaultValue={formatDateForInput(contractData?.endDate)}
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
        {isPending ? "Updating..." : "Update CONTRACT"}
      </Button>
    </Box>
  );
}

export default EditContractForm;
