const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});











/* const http = require("http");
const characters = require("../utils/data");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

if(req.url.includes("rickandmorty/character")) {

    let id = req.url.split("/").at(-1);

    let characterFilter = characters.filter((char) => char.id === Number(id) )
//  let characterFind = characters.find((char) => char.id === Number(id) )
// el metood find me trae el primer elemento que coincida
// mejor xq el find me devuelve un objeto y no un array con el obejto. mas preciso flayo

res.writeHead(200, {"Content-type": "application/json"})
.end(JSON.stringify(characterFilter))

}

}).listen(3001, "localhost")

// el metood find me trae el primer elemento que coincida

*/

