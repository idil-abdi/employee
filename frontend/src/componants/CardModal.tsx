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

  const { mutate: deleteEmployee, isPending } = useDeleteEmployee();

  if (!card) return null;

  const handleEdit = () => {
    onClose();
    navigate(`/employee/${card.id}`);
  };

  const handleDelete = () => {
    deleteEmployee(card.id.toString(), {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const ConvertDate = () => {
    console.log(card.dateOfBirth);
    const convert = String(card.dateOfBirth);
    return convert;
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
            <strong>Address:</strong> {card.address}
          </DialogContentText>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>DOB:</strong> {ConvertDate()}
          </DialogContentText>
        </DialogContent>
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
            <strong>Department:</strong> {card.department}
          </DialogContentText>
          <Typography gutterBottom>{card.description}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Contracts History:</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit} color="primary">
            EDIT
          </Button>
          <Button onClick={handleDelete} color="error" disabled={isPending}>
            {isPending ? "DELETING..." : "DELETE"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}

export default CardModal;
