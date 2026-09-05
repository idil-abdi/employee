import { Box, Container, Typography } from "@mui/material";
import "../App.css";
import Navbar from "../componants/Navbar";
import Hero from "../componants/Hero";
import Footer from "../componants/Footer";
import About from "../componants/About";
import CardContainer from "../componants/CardContainer";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Navbar />
          <Hero />
          <Box component="main" sx={{ p: 3 }}>
            <About />
            <Container id="ourEmployee" maxWidth="md" sx={{ py: 8 }}>
              <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                Our Employees
              </Typography>
              <CardContainer />
            </Container>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
