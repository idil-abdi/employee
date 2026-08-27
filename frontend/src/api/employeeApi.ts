import api from "../api/axios";
import type { CreateEmployeeDto, Employee } from "../types/Employee";

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await api.get<Employee[]>("/employee");
    console.log(response.data);
    return response.data;
};

// not sure if i need this
// export const getEmployee = async (id: string): Promise<Employee> => {
//     const response = await api.get<Employee>(`/employee/${id}`);
//     console.log(response.data);
//     return response.data;
// };

export const createEmployee = async (employee: CreateEmployeeDto): Promise<Employee> => {
    const response = await api.post<Employee>(`/employee`, employee);
    return response.data;
};