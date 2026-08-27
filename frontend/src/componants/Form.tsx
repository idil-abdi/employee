import { Box, Button, TextField } from "@mui/material";

function Form() {
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <TextField fullWidth label="First Name" />
        <TextField fullWidth label="Last Name" />
        <TextField
          label="Date of Birth"
          type="date"
          fullWidth
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Phone Number" />
        <TextField fullWidth label="Department" />

        <Box sx={{ gridColumn: { sm: "span 2" } }}>
          <TextField fullWidth label="Description" multiline rows={3} />
        </Box>
        <Button sx={{ gridColumn: { sm: "span 2" } }}>Create Employee</Button>
      </Box>
    </>
  );
}

export default Form;
