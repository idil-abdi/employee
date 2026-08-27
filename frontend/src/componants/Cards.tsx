import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useEmployees } from "../hooks/useEmployee";
import { useState } from "react";
import type { Employee } from "../types/Employee";
import CardModal from "./CardModal";

function Cards() {
  const [selectedCard, setSelectedCard] = useState<Employee | null>(null);
  const { data, isLoading, isError, error } = useEmployees();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const handleOpen = (card: Employee) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {/* 3. Render Cards */}
      {data?.map((card) => {
        const isSelected = selectedCard?.id === card.id;

        return (
          <Card key={card.id}>
            <CardActionArea
              onClick={() => handleOpen(card)}
              data-active={isSelected ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div" sx={{ pb: 1 }}>
                  {card.firstName} {card.lastName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {card.email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}

      {/* 4. Single Dialog instance outside the map */}
      <CardModal
        card={selectedCard}
        open={Boolean(selectedCard)}
        onClose={handleClose}
      />
    </>
  );
}

export default Cards;
