import api from "../api/axios";
import type { ContractsResponse } from "../types/Contract";

export const getEmployeeContracts = async (employeeId: string): Promise<ContractsResponse> => {
    const response = await api.get<ContractsResponse>(
    `/employee/${employeeId}/contracts`
  );
  return response.data;
};