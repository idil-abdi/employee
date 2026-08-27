import Hapi from '@hapi/hapi'
import prismaPlugin from './plugins/prisma';
import employeePlugin from './plugins/employee';
import errorHandlerPlugin from './plugins/errorHandlerPlugin ';
import contractPlugin from './plugins/contract';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['http://localhost:5173'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['cache-control']

            }
        }
    })

    await server.register([prismaPlugin, employeePlugin, errorHandlerPlugin, contractPlugin])
    
    await server.start()


    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init()