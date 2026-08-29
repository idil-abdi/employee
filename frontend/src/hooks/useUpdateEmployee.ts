import { updateEmployee } from '../api/employeeApi';
import { type UpdateEmployeeVariable } from './../types/Employee';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateEmployee = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, data, }: UpdateEmployeeVariable) => updateEmployee(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['employees']
            })
        }
    })
}