import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateEmployeeDto } from "../types/Employee"
import { createEmployee } from "../api/employeeApi"

export const useCreateEmployee = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (employee: CreateEmployeeDto) => createEmployee(employee),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            })
        }
    })
}