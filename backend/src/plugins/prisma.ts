import 'dotenv/config';
import { Server } from "@hapi/hapi";
import { PrismaClient } from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";
import { EmployeeService } from "../employee/service";

declare module '@hapi/hapi' {
    interface ServerApplicationState {
        prisma: PrismaClient;
        employeeService: EmployeeService;
    }
}

const prismaPlugin = {
    name: 'prisma',
    register: async (server: Server) => {
        const prisma = new PrismaClient({
            adapter: new PrismaPg({
                connectionString: process.env.DATABASE_URL,
            }),
        });

        server.app.prisma = prisma;

        server.ext({
            type: 'onPostStop',
            method: async (server) => {
                server.app.prisma.$disconnect()                
            }
        })
    }
}

export default prismaPlugin;
