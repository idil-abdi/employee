export interface Contract {
  id: string;
  title: string;
  contractType: string;
  startDate: string;
  endDate: string;
  salary: number;
  weeklyHours: number;
  employeeId: string;
}

export interface ContractsResponse {
  success: boolean;
  data: Contract[];
}

export interface CreateEmployeeContractDto {
  title: string;
  contractType: string;
  startDate: string;
  endDate?: string | null;
  salary: number;
  weeklyHours: number;
}

export interface DeleteContractResponse {
  success: boolean;
  message: string;
}

export interface UpdateContractDto {
    title?: string;
  contractType?: string;
  startDate?: string;
  endDate?: string | null;
  salary?: number;
  weeklyHours?: number;
}

export interface EditContractFormProps {
  employeeId: string;
  contractId: string;
  onSuccessClose?: () => void;
}