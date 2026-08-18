import { CreateEmployeePayload } from './types';
import { Employee, PrismaClient } from "../generated/prisma/client";
import { ConflictException } from '../exception/ConflictException';
import { NotFoundException } from '../exception/NotFoundException';

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

    async get() {
        return prisma.employee.findMany()
    },

    async getById(id: string) {
        return prisma.employee.findUnique({
            where: { id }
        })
    },
    
    async update(id: string, data: CreateEmployeePayload) {
        const employee = await prisma.employee.findUnique({
            where: { id }
        })

        if (!employee) {
                throw new NotFoundException(`Employee with ${id} not found`)
        }

        if(data.email) {
            const existing = await prisma.employee.findFirst({
                where: {
                    email: data.email,
                    NOT: { id }
                }
            })

            if (existing) {
                throw new ConflictException("Employee's email already exists");
            }       
        }

        return prisma.employee.update({
            where: { id },
            data: { 
                ...data, 
                
                // Convert date strings to Date objects if they exist in the payload
                ...(data.dateOfBirth && { dateOfBirth: new Date(data.dateOfBirth) }),
                ...(data.hireDate && { hireDate: new Date(data.hireDate) }),
            }
        })
    },

    async delete(id: string) {
        const employee = await prisma.employee.findUnique({
            where: { id }
        })

        if (!employee) {
                throw new NotFoundException(`Employee with ${id} not found`)
        }

        return prisma.employee.delete({
            where: { id },
        })
    },
});

export type EmployeeService = ReturnType<typeof createEmployeeService>