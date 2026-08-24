import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import CardModal from "./CardModal";
import type { CardListProps, EmployeeCard } from "../interfaces";

function Cards({ cards }: CardListProps) {
  const [selectedCard, setSelectedCard] = useState<EmployeeCard | null>(null);

  const handleOpen = (card: EmployeeCard) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {/* 3. Render Cards */}
      {cards.map((card) => {
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
                  {card.contract}
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
      {/* <Dialog open={Boolean(selectedCard)} onClose={handleClose}>
        {selectedCard && (
          <>
            <DialogTitle>
              {selectedCard.firstName} {selectedCard.lastName}
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ mb: 1 }}>
                <strong>Contract:</strong> {selectedCard.contract}
              </DialogContentText>
              <DialogContentText>
                <strong>Email:</strong> {selectedCard.email}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog> */}
    </>
  );
}

export default Cards;
