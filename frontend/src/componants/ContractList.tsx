import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function ContractList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              mb: 2,
            }}
          >
            <Typography
              component="span"
              variant="body1"
              sx={{ color: "text.primary", display: "inline" }}
            >
              Assistant Product Manager
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button>
                <Edit color="primary" />
              </Button>
              <Button>
                <Delete color="error" />
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: "text.primary",
                display: "inline",
                fontWeight: "bold",
              }}
            >
              FULL-TIME
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: "text.primary",
                display: "inline",
                fontWeight: "bold",
              }}
            >
              20/11/2022 - Current
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              Weekly Hours: <b>32</b>
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              Salary: <b>£52,000</b>
            </Typography>
          </Box>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default ContractList;
