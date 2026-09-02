import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          My Blue App Header
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.8, mt: 0.5 }}
        >
          © {new Date().getFullYear()}{" "}
          <Link color="inherit" to="/">
            Your Website
          </Link>
          . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
