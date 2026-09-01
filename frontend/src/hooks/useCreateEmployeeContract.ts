import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateEmployeeContractDto } from "../types/Contract"
import { createEmployeeContracts } from "../api/contractApi"

interface CreateContractVariables {
    employeeId: string;
    contract: CreateEmployeeContractDto;
}

export const useCreateEmployeeContracts = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ employeeId, contract }: CreateContractVariables) => createEmployeeContracts(employeeId, contract),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["contracts", variables.employeeId]
            })
        }
    })
}