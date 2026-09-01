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
  endDate?: string;
  salary: number;
  weeklyHours: number;
}