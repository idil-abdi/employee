import { Box, Toolbar } from "@mui/material";
import "../App.css";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

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
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <h1>Home Page</h1>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
