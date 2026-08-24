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
import type { CardDialogProps } from "../interfaces";
import { styled } from "@mui/material/styles";
import { Fragment } from "react/jsx-runtime";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CardModal({ card, open, onClose }: CardDialogProps) {
  if (!card) return null;

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
            <strong>Contract Type:</strong> {card.contract}
          </DialogContentText>
          <DialogContentText sx={{ mb: 1 }}>
            <strong>Email:</strong> {card.email}
          </DialogContentText>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            EDIT
          </Button>
          <Button autoFocus onClick={onClose}>
            DELETE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}

export default CardModal;
