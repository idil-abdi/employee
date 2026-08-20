import { ContractType } from '../generated/prisma/enums'

export type CreateContractPayload = {
    contractType: ContractType, // part time, fullt ime or contract
    title: string,
    salary:number
    startDate: string | Date,
    endDate: string | Date,
    weeklyHours: number,
    employeeId: string,
}