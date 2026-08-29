import api from "../api/axios";
import type { CreateEmployeeDto, Employee, UpdateEmployeeDto } from "../types/Employee";

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await api.get<Employee[]>("/employee");
    console.log(response.data);
    return response.data;
};

export const getEmployee = async (employeeId: string): Promise<Employee> => {
    const response = await api.get<Employee>(`/employee/${employeeId}`);
    return response.data;
};

export const createEmployee = async (employee: CreateEmployeeDto): Promise<Employee> => {
    const response = await api.post<Employee>(`/employee`, employee);
    return response.data;
};

export const updateEmployee = async (id: string, employee: UpdateEmployeeDto): Promise<Employee> => {
    const response = await api.put<Employee>(`/employee/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
    await api.delete<Employee>(`/employee/${id}`);
};