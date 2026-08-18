import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ContractType, PrismaClient } from '../src/generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({connectionString})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({adapter})

const main = async () => {
    const employeeOne = await prisma.employee.upsert({
        where: { email: 'john123@test.com'},
        update: {},
        create: {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john123@test.com',
            mobileNumber: '+445234584411',
            address: '34 Gold Street San Francisco, CA 94121',
            dateOfBirth: new Date('1992-05-15'),
            hireDate: new Date('2021-03-01'),
            department: 'Developer',
            description: 'Senior Software Developer specializing in backend development.'
        }
    });

    const employeeTwo = await prisma.employee.upsert({
        where: { email: 'jane.doe@example.com'},
        update: {},
        create: {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@example.com',
            mobileNumber: '+44551234567',
            address: '52 Silver Road, San Francisco, CA 94121',
            dateOfBirth: new Date('1999-11-15'),
            hireDate: new Date('2020-07-18'),
            department: 'Human Resources',
        }
    })

    const contractOne = await prisma.contract.create({
        data: {
            contractType: ContractType.FULL_TIME,
            startDate: new Date('2022-01-15'),
            weeklyHours: 40,
            employeeId: employeeOne.id
        }
    })

    const contractTwo = await prisma.contract.create({
        data: {
            contractType: ContractType.PART_TIME,
            startDate: new Date('2020-11-15'),
            endData: new Date('2021-12-21'),
            weeklyHours: 20,
            employeeId: employeeOne.id
        }
    })

    console.log({ employeeOne, employeeTwo, contractOne, contractTwo});
    console.log('Seeding finished successfully.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });