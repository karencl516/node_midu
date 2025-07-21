const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./file.txt', 'utf-8')
  .then(text =>{
    console.log('primer texto:',text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./file2.txt', 'utf-8')
  .then(text =>{
    console.log('Segundo Text:',text)
  })



//ESTO SE HACE CON CALLBACKS

// const fs = require('node:fs')

// console.log('Leyendo el primer archivo...')
// fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
//   console.log('primer texto:', text)
// })

// console.log('--> Hacer cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo...')
// fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
//   console.log('segundo texto:', text)
// })