import { Box, Toolbar } from "@mui/material";
import "../App.css";
import Navbar from "../componants/Navbar";
// import { useState } from "react";

function App() {
  // const [loading, setLoading] = useState<boolean>(true)

  // if (loading) return <p>Loading...</p>

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
