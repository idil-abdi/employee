import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import { CreateContractPayload } from "./types";

type ContractParams = {
    employeeId: string;
};

export const createContractHandler = async (
    request: Request<{ Params: ContractParams }>,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeId } = request.params;
    const {contractService} = request.server.app

    const data = request.payload as CreateContractPayload

    const contract = await contractService.create(
        { ...data, employeeId },
        employeeId
    )
    return h.response(contract).code(201)
}

export const getAllContractsHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeId } = request.params;
    const { contractService } = request.server.app;
    
    const getAllContract = await contractService.get(String(employeeId))
    return h.response(getAllContract).code(200)
}

export const getContractByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeId, contractId } = request.params;
    const { contractService } = request.server.app;
    
    const getContractById = await contractService.getById(String(employeeId), String(contractId))
    return h.response(getContractById).code(200)
}

export const updateContractByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeId, contractId } = request.params;
    const { contractService } = request.server.app;
    const data = request.payload as CreateContractPayload

    const update = await contractService.update(String(employeeId), String(contractId), data)
    return h.response({
        id: update.data.id,
        message: 'Contract has been successfully updated'
    }).code(200)
}

export const deleteContractByIdHandler = async (
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> => {
    const { employeeId, contractId } = request.params;
    const { contractService } = request.server.app;

    const deleted = await contractService.delete(String(employeeId), String(contractId));

    return h.response({
        id: deleted.data.id,
        message: 'Contract has been successfully deleted'
    })
}