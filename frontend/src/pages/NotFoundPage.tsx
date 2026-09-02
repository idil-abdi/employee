import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../componants/Footer";

function NotFoundPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div>NotFoundPage ❌</div>
        <Link to={"/"}>
          <Button>Go Back Home</Button>
        </Link>
        <Footer />
      </Box>
    </>
  );
}

export default NotFoundPage;
