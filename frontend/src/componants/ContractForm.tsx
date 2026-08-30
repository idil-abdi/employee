import { Box, Button, TextField } from "@mui/material";
// import React from "react";

function ContractForm() {
  return (
    <>
      <Box
        component="form"
        // onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <TextField fullWidth label="First Name" name="firstName" required />
        <TextField fullWidth label="Last Name" name="lastName" required />
        <TextField
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          fullWidth
          //   value={formData.dateOfBirth}
          //   onChange={handleChange}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Hire Date"
          name="hireDate"
          type="date"
          fullWidth
          //   value={formData.hireDate}
          //   onChange={handleChange}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ gridColumn: { sm: "span 2" } }}
        >
          CREATE CONTRACT
        </Button>
      </Box>
    </>
  );
}

export default ContractForm;
