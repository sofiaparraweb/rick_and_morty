import axios from "axios"

const getCharById = (res, id) => {
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then((response) => response.data)
.then((data) => {
    const character = { 
    id: data.id,
    image: data.image,
    name: data.name,
    gender: data.gender,
    species: data.species
    }
    res.writeHead(200, { "Content-Type" : "application/json" })
    res.end(JSON.stringify(character))
})
.catch((error) => {
    res.writeHead(500, { "Content-Type" : "text/plain" })
    res.end(error.message)
})
}

module.exports = {
getCharById
}


/*

2. ¡Listo! Ya tenemos nuestro primer controlador. Ahora lo vamos a utilizar en nuestra ruta. 
Para esto, dirígete al archivo llamado **`server.js`**. **Elimina** todo el contenido de este archivo, 
y también elimina el archivo **`data.js`** de la carpeta **utils**.

3. Dentro de este archvio tendrás que:

   -  Importar **http** y el controlador que creaste.

   -  Crear y levantar un servidor en el puerto **3001**.

   -  Dentro del callback del servidor debes:

      -  Crea el callback del servidor que recibe a **`req`** y a **`res`**.

      -  copiar y pegar la siguiente línea dentro del callback de este servidor:

      ```javascript
      res.setHeader('Access-Control-Allow-Origin', '*');
      ```

      > **[NOTA]**: esta línea permitirá contectar tu FRONT con el SERVIDOR sin que haya problemas de CORS.

      -  crear un condicional que pregunte si la **url** incluye el string "_**onsearch**_". En el caso de que si lo incluya deberás ejecutar el controlador que creamos en el ejercicio anterior pasándole como argumentos:

         -  El parámetro **`res`**.

         -  El segundo parámetro debe ser el ID del personaje que recibes mediante la URL.

      > **[PISTA]:** dentro del parámetro **`req.url`** está el id del personaje. Puedes utilizar el método split() para obtenerlo...

<br />

---*/
