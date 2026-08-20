import { NotFoundException } from "../exception/NotFoundException";
import { ValidationException } from "../exception/ValidationException";
import { PrismaClient } from "../generated/prisma/client";
import { CreateContractPayload } from "./types";

export const createContractService = (prisma: PrismaClient) => ({
    async create(data: CreateContractPayload, id: string) {
        const employee = await prisma.employee.findUnique({
            where: { id: data.employeeId },
        });

        if (!employee) {
            throw new NotFoundException(`Employee with ID: ${data.employeeId} not found`)
        }

        // 2. Business logic validation for contractType & endDate
        const isFullTime = data.contractType === 'FULL_TIME';

        if (!isFullTime && !data.endDate) {
            throw new ValidationException(`Contract type "${data.contractType}" requires an end date.`)
        }

        const endDate = isFullTime ? null : (data.endDate ? new Date(data.endDate) : null);

        // 3. Database operation
        const contract = await prisma.contract.create({
            data: {
                title: data.title,
                contractType: data.contractType,
                salary: data.salary ? Number(data.salary) : null,
                startDate: new Date(data.startDate),
                endDate: endDate,
                weeklyHours: Number(data.weeklyHours),
                employee: {
                    connect: { id: data.employeeId }
                }
            },
            select: {
                id: true,
                title: true,
                contractType: true,
                startDate: true,
                endDate: true,
                salary: true,
                weeklyHours: true,
                employeeId: true 
            },
        });

        return {
            success: true,
            data: contract
        };

    
    },

    async getAll() {
        return prisma.contract.findMany({
            select: {
                id: true,
                title: true,
                contractType: true,
                startDate: true,
                endDate: true,
                salary: true,
                weeklyHours: true,
                employee: {
                    select: {
                        id: true,
                    },
                },
            },
        })
    }
})



export type ContractService = ReturnType<typeof createContractService>