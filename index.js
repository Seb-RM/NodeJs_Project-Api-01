const express = require("express");
const apiRouter = require("./server");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res)=> {
    res.send('Funcionando en ruta raíz.')
});

apiRouter(app);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});