import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { ITicket } from "../../models/Ticket";

type TicketDetailProps = {
  open: boolean;
  onClose: () => void;
  ticket: ITicket | null;
};

const TicketDetail: React.FC<TicketDetailProps> = ({
  open,
  onClose,
  ticket,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Ticket Detail</DialogTitle>
      <DialogContent>{ticket?.title}</DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TicketDetail;
