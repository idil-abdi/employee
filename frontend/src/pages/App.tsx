import { Box, Toolbar } from "@mui/material";
import "../App.css";
import Navbar from "../componants/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1>Home Page</h1>
      </Box>
    </>
  );
}

export default App;
