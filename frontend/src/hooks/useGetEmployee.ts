import { useQuery } from "@tanstack/react-query"
import { getEmployee } from "../api/employeeApi"

export const useGetEmployee = (employeeId?: string) => {
    return useQuery({
        queryKey: ["employee", employeeId ],
        queryFn: () => getEmployee(employeeId!),
        enabled: Boolean(employeeId)
    })
}