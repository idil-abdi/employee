import api from "../api/axios";
import type { Contract, ContractsResponse, CreateEmployeeContractDto } from "../types/Contract";

export const getEmployeeContracts = async (employeeId: string): Promise<ContractsResponse> => {
    const response = await api.get<ContractsResponse>(`/employee/${employeeId}/contracts`);
    return response.data;
};

export const createEmployeeContracts = async (employeeId: string, contract: CreateEmployeeContractDto): Promise<Contract> => {
    const response = await api.post<Contract>(`/employee/${employeeId}/contracts`, contract);
    console.log(response.data);
    return response.data;
};