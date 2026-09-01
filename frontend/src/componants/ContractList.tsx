import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useGetEmployeeContracts } from "../hooks/useGetEmployeeContracts";
import DeleteWarning from "./DeleteWarning";
import { useState } from "react";
import { useDeleteEmployeeContract } from "../hooks/useDeleteEmployeeContract";
interface Props {
  employeeId: string;
}

function ContractList({ employeeId }: Props) {
  const [selectedContractId, setSelectedContractId] = useState<string | null>(
    null,
  );

  const { mutate: deleteContract, isPending } = useDeleteEmployeeContract();
  const { data, isLoading, isError, error } =
    useGetEmployeeContracts(employeeId);

  const handleConfirmDelete = () => {
    if (!selectedContractId) return;

    deleteContract(
      { employeeId, contractId: selectedContractId },
      {
        onSuccess: () => {
          setSelectedContractId(null);
        },
      },
    );
  };

  if (isLoading) return <div>Loading contracts...</div>;
  if (isError)
    return <div>Error loading contracts: {(error as Error).message}</div>;
  return (
    <>
      {data && data.data.length > 0 ? (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            border: 1,
            borderColor: "grey.400",
          }}
        >
          {data.data.map((contract) => (
            <ListItem key={contract.id} alignItems="flex-start" divider>
              <ListItemText
                disableTypography
                children={
                  <>
                    {/* Header: Title & Action Buttons */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary", fontWeight: 600 }}
                      >
                        {contract.title}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton size="small" color="primary">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => setSelectedContractId(contract.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Row 2: Type & Dates */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary", fontWeight: "bold" }}
                      >
                        {contract.contractType}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary", fontWeight: "bold" }}
                      >
                        {new Date(contract.startDate).toLocaleDateString()} -{" "}
                        {contract.endDate
                          ? new Date(contract.endDate).toLocaleDateString()
                          : "Current"}
                      </Typography>
                    </Box>

                    {/* Row 3: Hours & Salary */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        Weekly Hours: <b>{contract.weeklyHours}</b>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        Salary: <b>£{contract.salary.toLocaleString()}</b>
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography
          variant="body2"
          sx={{ p: 2, textAlign: "center", color: "text.secondary" }}
        >
          No Contract found
        </Typography>
      )}
      <DeleteWarning
        open={Boolean(selectedContractId)}
        onClose={() => setSelectedContractId(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Employee's contract"
        description={`Are you sure you want to delete this contract. This action cannot be undone.`}
        isLoading={isPending}
      />
    </>
  );
}

export default ContractList;
