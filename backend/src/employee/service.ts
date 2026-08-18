import { CreateEmployeePayload } from './types';
import { Employee, PrismaClient } from "../generated/prisma/client";
import { ConflictException } from '../exception/ConflictException';

export const createEmployeeService = (prisma: PrismaClient) => ({
    async create(data: CreateEmployeePayload) {
        const existing = await prisma.employee.findUnique({
            where: { email: data.email },
        });

        if (existing) {
            throw new ConflictException('Employee already exists');
        }

        return prisma.employee.create({
            data: { 
                ...data, 
                dateOfBirth: new Date(data.dateOfBirth),
                hireDate: new Date(data.hireDate) },
        });
    },
});

export type EmployeeService = ReturnType<typeof createEmployeeService>