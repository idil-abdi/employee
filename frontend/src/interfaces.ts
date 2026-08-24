// import { EmployeeCard } from './componants/data/EmployeeCard';
// import type { EmployeeCard } from "./data/EmployeeCard";

export interface EmployeeCard {
  id: number;
  firstName: string;
  lastName: string;
  contract: string;
  email: string;
}

export interface CardItemProps {
  card: EmployeeCard;
  isSelected: boolean;
  onSelect: () => void;
}

export interface CardListProps {
  cards: EmployeeCard[];
}

export interface CardDialogProps {
  card: EmployeeCard | null;
  open: boolean;
  onClose: () => void;
}