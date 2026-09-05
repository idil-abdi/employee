import { Container, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Container id="about" maxWidth="md" sx={{ py: 8 }}>
        <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>
          About Us
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>
          We believe the best stories come from the people inside the company.
          CreatorApp gives every employee the tools, templates, and permissions
          they need to create authentic content while helping brands maintain
          consistency and engagement.
        </Typography>
      </Container>
    </>
  );
}

export default About;
