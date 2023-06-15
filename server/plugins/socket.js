
import { Server } from 'socket.io';

const plugin = (nitroApp) => {

    // const server = createServer(nitroApp);
    const io = new Server(3030, {
        cors: '*',
    });

    io.on("connection", (socket) => {

        socket.on('chat', (message) => {

            io.emit('chat', message);
        })
    });

    console.log('hello')
};

export default defineNitroPlugin(plugin);