import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";

function NotFoundPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <div className="text-center m-auto">
          <h1>NotFoundPage ❌</h1>
          <Link to={"/"}>
            <Button>Go Back Home</Button>
          </Link>
        </div>
        <Footer />
      </Box>
    </>
  );
}

export default NotFoundPage;
