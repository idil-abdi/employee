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

export const getAllEmployeeHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const {employeeService} = request.server.app;
    const employees = await employeeService.get()

    return h.response(employees).code(200)
}

export const getEmployeeByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { id } = request.params;
    const { employeeService } = request.server.app

    const getEmployee = await employeeService.getById(String(id))

    if (!getEmployee) {
        return h.response({
            message: 'Employee not found'
        }).code(404)
    }

    return h.response(getEmployee).code(200)
}

export const updateEmployeeByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { id } = request.params;
    const { employeeService } = request.server.app;
    const data = request.payload as CreateEmployeePayload;

    const updated = await employeeService.update(String(id), data);
    return h.response(updated).code(200);
}

export const deleteEmployeeByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { id } = request.params;
    const { employeeService } = request.server.app;

    const deleted = await employeeService.delete(String(id));
    return h.response(deleted).code(200);
}