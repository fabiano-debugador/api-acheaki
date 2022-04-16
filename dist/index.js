"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
// // Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// Inicia o sevidor
app_1.app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
