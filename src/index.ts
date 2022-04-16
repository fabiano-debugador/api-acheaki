import { app } from './app';

const PORT = process.env.PORT || 4000
// // Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
