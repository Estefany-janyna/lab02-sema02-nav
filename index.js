// const express = require('express')
// const app = express()

// app.get('/',(req,res) =>{
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     })
// })

// // app.use((req,res)=>{
// //     res.status(404).send('no se encontro tu pagina....!!!')
// // })

// app.listen(3000)
// console.log(`Server on port ${3000}`)


//-------------------------------------------------------------------------------}
const express = require('express');
const app = express();
const path = require('path'); // Importa el módulo 'path' para trabajar con rutas de archivos

// Ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'static') // Utiliza 'path.join' para obtener la ruta completa
  });
});

// Ruta para el archivo page1.html
app.get('/about', (req, res) => {
  res.sendFile('about.html', {
    root: path.join(__dirname, 'static')
  });
});

// Ruta para el archivo page2.html
app.get('/contact', (req, res) => {
  res.sendFile('contact.html', {
    root: path.join(__dirname, 'static')
  });
});

// Manejo de respuesta 404 personalizada
app.use((req, res) => {
  res.status(404).send('¡Página no encontrada!');
});


app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
  });


