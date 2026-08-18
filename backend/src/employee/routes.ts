import { ServerRoute } from "@hapi/hapi";
import { createEmployeeHandler, deleteEmployeeByIdHandler, getAllEmployeeHandler, getEmployeeByIdHandler, updateEmployeeByIdHandler } from "./handlers";
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
    {
        method: 'GET',
        path: '/employee',
        handler: getAllEmployeeHandler,
    },
    {
        method: 'GET',
        path: '/employee/{id}',
        handler: getEmployeeByIdHandler,
    },
    {
        method: 'PUT',
        path: '/employee/{id}',
        handler: updateEmployeeByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/employee/{id}',
        handler: deleteEmployeeByIdHandler,
    },
]