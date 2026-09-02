import { useQuery } from "@tanstack/react-query"
import { getEmployeeContract } from "../api/contractApi"

export const useGetEmployeeContract = (employeeId:string, contractId: string) => {
    return useQuery({
        queryKey: ["contracts", employeeId, contractId],
        queryFn: () => getEmployeeContract(employeeId!, contractId!),
        enabled: Boolean(employeeId && contractId)
    })
}