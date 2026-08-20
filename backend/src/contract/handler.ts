import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import { CreateContractPayload } from "./types";

export async function createContractHandler(
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> {
    const { id } = request.params;
    const {contractService} = request.server.app

    const data = request.payload as CreateContractPayload

    const contract = await contractService.create(data, String(id))
    return h.response(contract).code(201)
}

export async function getAllContractHandler(
    request: Request,
    h: ResponseToolkit,
): Promise<ResponseObject> {
    const { contractService } = request.server.app;
    return h.response(await contractService.getAll()).code(200);
}