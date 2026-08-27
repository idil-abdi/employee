import api from "../api/axios";
import type { Employee } from "../types/Employee";

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await api.get<Employee[]>("/employee");
    console.log(response.data);
    return response.data;
};

export const getEmployee = async (id: string): Promise<Employee> => {
    const response = await api.get<Employee>(`/employee/${id}`);
    console.log(response.data);
    return response.data;
};

