import { Box } from "@mui/material";
import Cards from "./Cards";
import { cards } from "../data/EmployeeCard";

function CardContainer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        <Cards cards={cards} />
      </Box>
    </>
  );
}

export default CardContainer;
