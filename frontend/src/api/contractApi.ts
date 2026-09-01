import api from "../api/axios";
import type { Contract, ContractsResponse, CreateEmployeeContractDto, DeleteContractResponse } from "../types/Contract";

export const getEmployeeContracts = async (employeeId: string): Promise<ContractsResponse> => {
    const response = await api.get<ContractsResponse>(`/employee/${employeeId}/contracts`);
    return response.data;
};

export const createEmployeeContracts = async (employeeId: string, contract: CreateEmployeeContractDto): Promise<Contract> => {
    const response = await api.post<Contract>(`/employee/${employeeId}/contracts`, contract);
    return response.data;
};

export const deleteContract = async (employeeId: string, contractId: string): Promise<DeleteContractResponse> => {
    const response = await api.delete<DeleteContractResponse>(`/employee/${employeeId}/contracts/${contractId}`);
    return response.data;
};