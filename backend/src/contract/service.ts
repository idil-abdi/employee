import { NotFoundException } from "../exception/NotFoundException";
import { ValidationException } from "../exception/ValidationException";
import { PrismaClient } from "../generated/prisma/client";
import { CreateContractPayload } from "./types";

export const createContractService = (prisma: PrismaClient) => ({
    async create(data: CreateContractPayload, employeeId: string) {
        const employee = await prisma.employee.findUnique({
            where: { id: employeeId },
        });

        if (!employee) {
            throw new NotFoundException(`Employee with ID: ${employeeId} not found`);
        }

        const isFullTime = data.contractType === 'FULL_TIME';

        if (!isFullTime && !data.endDate) {
            throw new ValidationException(`Contract type "${data.contractType}" requires an end date.`);
        }

        const endDate = isFullTime ? null : (data.endDate ? new Date(data.endDate) : null);

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

    async get(employeeId: string) {
        const employee = await prisma.employee.findUnique({
            where: { id: employeeId },
        });

        if (!employee) {
            throw new NotFoundException(`Employee with ID: ${employeeId} not found`);
        }

        const contracts = await prisma.contract.findMany({
            where: { employeeId },
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
        })

        return {
            success: true,
            data: contracts
        }
    },

    async getById(employeeId: string, contractId: string) {
        const contract = await prisma.contract.findUnique({
            where: { 
                id: contractId,
                employeeId: employeeId
            },
        });

        if (!contract) {
            throw new NotFoundException(`Contract with ID ${contractId} not found for Employee ${employeeId}`);
        }

        return {
            data: contract
        }
    },

    async update(employeeId: string, contractId: string, data: CreateContractPayload) {
        const exitingContract = await prisma.contract.findFirst({
            where: { 
                id: contractId,
                employeeId: employeeId
            },
        });

        if (!exitingContract) {
            throw new NotFoundException(`Contract with ID ${contractId} not found for Employee ${employeeId}`);
        }

        const updatedContract = await prisma.contract.update({
            where: {
                id: contractId,
            },
            data: {
                contractType: data.contractType,
                title: data.title,
                salary: Number(data.salary),
                startDate: data.startDate ? new Date(data.startDate) : undefined,
                endDate: data.endDate ? new Date(data.endDate) : undefined,
                weeklyHours: Number(data.weeklyHours),
            },
        })

        return {
            data: updatedContract,
        }
    },

    async delete(employeeId: string, contractId: string) {
        const exitingContract = await prisma.contract.findFirst({
            where: { 
                id: contractId,
                employeeId: employeeId
            },
        });

        if (!exitingContract) {
            throw new NotFoundException(`Contract with ID ${contractId} not found for Employee ${employeeId}`);
        }

        const deletedContract = await prisma.contract.delete({
            where: {
                id: contractId,
                employeeId: employeeId
            },
        })

        return {
            data: deletedContract,
        }
    }
    
})

export type ContractService = ReturnType<typeof createContractService>