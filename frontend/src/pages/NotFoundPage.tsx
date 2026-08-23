import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>NotFoundPage ❌</div>
      <Link to={"/"}>
        <Button>Go Back Home</Button>
      </Link>
    </>
  );
}

export default NotFoundPage;
