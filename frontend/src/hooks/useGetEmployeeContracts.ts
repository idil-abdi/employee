import { useQuery } from "@tanstack/react-query"
import { getEmployeeContracts } from "../api/contractApi"

export const useGetEmployeeContracts = (employeeId:string) => {
    return useQuery({
        queryKey: ["employeeContracts", employeeId],
        queryFn: () => getEmployeeContracts(employeeId),
        enabled: Boolean(employeeId)
    })
}