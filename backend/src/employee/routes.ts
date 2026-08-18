import { ServerRoute } from "@hapi/hapi";
import { createEmployeeHandler } from "./handlers";
import { createEmploeeSchema } from './validate';

export const employeeRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/employee',
        handler: createEmployeeHandler,
        options: {
            validate: {
                payload: createEmploeeSchema,
            }
        }
    },
]