import { Server } from "@hapi/hapi";
import { createContractService } from "../contract/service";
import { contractRoutes } from "../contract/routes";

const contractPlugin = {
    name: 'app/contracts',
    dependencies: ['prisma'],
    register: async function (server: Server) {
        server.app.contractService = createContractService(server.app.prisma);
        server.route(contractRoutes);
    }
}

export default contractPlugin;