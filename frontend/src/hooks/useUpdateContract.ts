import { updateContract } from '../api/contractApi';
import type { UpdateContractDto } from '../types/Contract';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export interface UpdateContractVariable {
    employeeId: string,
    contractId: string,
    contract: UpdateContractDto,
    
}

export const useUpdateContract = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ employeeId, contractId, contract }: UpdateContractVariable) => updateContract(employeeId, contractId, contract),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['contracts']
            })
        }
    })
}