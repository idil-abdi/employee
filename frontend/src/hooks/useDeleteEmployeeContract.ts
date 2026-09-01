import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { DeleteContractResponse } from "../types/Contract";
import { deleteContract } from "../api/contractApi";

interface DeleteContractVariables {
    employeeId: string;
    contractId: string;
}

export const useDeleteEmployeeContract = () => {
    const queryClient = useQueryClient()

    return useMutation<DeleteContractResponse, Error, DeleteContractVariables>({
        mutationFn: ({ employeeId, contractId }:DeleteContractVariables ) => deleteContract(employeeId, contractId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["contracts"] });
        },
        onError: (error) => {
            console.error('Failed to delete item:', error.message);
        },
    })
}