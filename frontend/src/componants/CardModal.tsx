import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment } from "react/jsx-runtime";
import CloseIcon from "@mui/icons-material/Close";
import type { EmployeeCardProps } from "../types/Employee";
import { useNavigate } from "react-router-dom";
import { useDeleteEmployee } from "../hooks/useDeleteEmployee";
import { useState } from "react";
import DeleteWarning from "./DeleteWarning";
import ContractList from "./ContractList";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CardModal({ card, open, onClose }: EmployeeCardProps) {
  const navigate = useNavigate();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const { mutate: deleteEmployee, isPending } = useDeleteEmployee();

  if (!card) return null;

  const handleEdit = () => {
    onClose();
    navigate(`/employee/${card.id}`);
  };

  const handleOpenContract = (employeeId: string) => {
    navigate(`/employee/${employeeId}/contracts`);
  };

  const handleConfirmDelete = () => {
    deleteEmployee(card.id.toString(), {
      onSuccess: () => {
        setIsConfirmOpen(false);
        onClose();
      },
    });
  };

  const ConvertDate = () => {
    return String(card.dateOfBirth).split("T")[0];
  };

  return (
    <Fragment>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {`${card.firstName} ${card.lastName}`}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          disabled={isPending}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Email:</strong> {card.email}
          </DialogContentText>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Mobile:</strong> {card.mobileNumber}
          </DialogContentText>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Address:</strong> {card.address}
          </DialogContentText>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>DOB:</strong> {ConvertDate()}
          </DialogContentText>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Department:</strong> {card.department}
          </DialogContentText>
          <Typography gutterBottom>{card.description}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <strong>Contracts History:</strong>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleOpenContract(card.id)}
            >
              Add Contract
            </Button>
          </DialogContentText>
          <ContractList employeeId={card.id} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit} color="primary">
            EDIT
          </Button>
          <Button
            onClick={() => setIsConfirmOpen(true)}
            color="error"
            disabled={isPending}
          >
            {isPending ? "DELETING..." : "DELETE"}
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <DeleteWarning
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Employee"
        description={`Are you sure you want to delete ${card.firstName} ${card.lastName}? This action cannot be undone.`}
        isLoading={isPending}
      />
    </Fragment>
  );
}

export default CardModal;
