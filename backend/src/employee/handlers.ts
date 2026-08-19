import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import { CreateEmployeePayload } from "./types";
import { NotFoundException } from "../exception/NotFoundException";

export const createEmployeeHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeService } = request.server.app;
    const data = request.payload as CreateEmployeePayload;


    const employee = await employeeService.create(data);
    return h.response({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        message: 'New employee has been successfully created'
    }).code(201);
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

    const getByIdEmployee = await employeeService.getById(String(id))

    return h.response(getByIdEmployee).code(200)
}

export const updateEmployeeByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { id } = request.params;
    const { employeeService } = request.server.app;
    const data = request.payload as CreateEmployeePayload;

    const updated = await employeeService.update(String(id), data);
    return h.response({
        id: updated.id,
        message: 'Employee has been successfully updated'
    }).code(200);
}

export const deleteEmployeeByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { id } = request.params;
    const { employeeService } = request.server.app;

    const deleted = await employeeService.delete(String(id));
    return h.response({
        id: deleted.id,
        message: 'Employee has been successfully deleted'
    }).code(200);
}