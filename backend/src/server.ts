import Hapi from '@hapi/hapi'
import prismaPlugin from './plugins/prisma';
import employeePlugin from './plugins/employee';
import errorHandlerPlugin from './plugins/errorHandlerPlugin ';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    await server.register([prismaPlugin, employeePlugin, errorHandlerPlugin])
    await server.start()


    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init()