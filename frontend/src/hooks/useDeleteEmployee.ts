import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteEmployee } from "../api/employeeApi";
import type { DeleteResponse } from "../types/Employee";

export const useDeleteEmployee = () => {
    const queryClient = useQueryClient()

    return useMutation<DeleteResponse, Error, string>({
        mutationFn: (itemId: string) => deleteEmployee(itemId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
        },
        onError: (error) => {
            console.error('Failed to delete item:', error.message);
        },
    })
}