import { ServerRoute } from "@hapi/hapi";
import { createContractHandler, getAllContractHandler } from "./handler";

export const contractRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/employees/{employeeId}/contracts',
        handler: createContractHandler,
    },
    // {
    //     method: 'GET',
    //     path: '/contract',
    //     handler: getAllContractHandler,
    // },
]