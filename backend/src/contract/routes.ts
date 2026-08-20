import { ServerRoute } from "@hapi/hapi";
import { createContractHandler, deleteContractByIdHandler, getAllContractsHandler, getContractByIdHandler, updateContractByIdHandler } from "./handler";
import { createContractSchema } from "./validate";

export const contractRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/employee/{employeeId}/contracts',
        handler: createContractHandler,
        options: {
            validate: {
                payload: createContractSchema,
            }
        }
    },
    {
        method: 'GET',
        path: '/employee/{employeeId}/contracts',
        handler: getAllContractsHandler,
    },
    {
        method: 'GET',
        path: '/employee/{employeeId}/contracts/{contractId}',
        handler: getContractByIdHandler,
    },
    {
        method: 'PUT',
        path: '/employee/{employeeId}/contracts/{contractId}',
        handler: updateContractByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/employee/{employeeId}/contracts/{contractId}',
        handler: deleteContractByIdHandler,
    },
]