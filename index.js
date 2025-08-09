const express = require("express");
const apiRouter = require("./server");
const { errorLogs, handlerError } = require("./middleware/error.handler");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res)=> {
    res.send('Funcionando en ruta raíz.')
});

apiRouter(app);

app.use(errorLogs);
app.use(handlerError);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = { app };