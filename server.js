const shelljs = require('shelljs');

startServer();

async function startServer() {
    command = `npm run start:dev`;
    shelljs.exec(command);
}