const express = require('express');
const app = express();
const cors = require('cors');
const estudiantesRoutes = require('./routes/estudiantesRoutes')
const profesoresRoutes = require('./routes/profesoresRoutes')
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hola mundo');
});
app.use('/profesores',profesoresRoutes);
app.use('/estudiantes',estudiantesRoutes);

app.listen(6500, ()=>{
    console.log("Servidor activo");
});