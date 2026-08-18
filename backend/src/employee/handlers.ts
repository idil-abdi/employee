import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import { CreateEmployeePayload } from "./types";
import { ConflictException } from "../exception/ConflictException";

export const createEmployeeHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    try {
        const { employeeService } = request.server.app;
        const data = request.payload as CreateEmployeePayload;
        
        const employee = await employeeService.create(data);
        
        return h.response(employee).code(201);
    } catch (error) {
        if (error instanceof ConflictException) {
            return h.response({ error: error.message }).code(409);
        }
        return h.response({ message: 'Internal Server Error' }).code(500);
    }
}