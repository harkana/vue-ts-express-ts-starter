import { Server } from "./Server";

new Server().start()
    .then(() => {
        console.log('Server started...');
    })
    .catch((err:any) => {
        console.error(err);
    });