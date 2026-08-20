import { Server } from '@hapi/hapi';
import { createEmployeeService } from '../employee/service';
import { employeeRoutes } from '../employee/routes';

const employeePlugin = {
    name: 'app/employees',
    dependencies: ['prisma'],
    register: async function (server: Server) {
        server.app.employeeService = createEmployeeService(server.app.prisma);
        server.route(employeeRoutes);
    },
};

export default employeePlugin;