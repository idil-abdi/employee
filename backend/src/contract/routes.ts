import { ServerRoute } from "@hapi/hapi";
import { createContractHandler, getAllContractsHandler, getContractByIdHandler } from "./handler";

export const contractRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/employee/{employeeId}/contracts',
        handler: createContractHandler,
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
]