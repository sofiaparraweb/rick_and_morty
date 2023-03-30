const http = require('http');
import { getCharById } from "../controllers/getCharById"
import { getCharDetail } from "../controllers/getCharDetail"

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")

    let id = req.url.split("/").at(-1);

if (req.url.includes("onSearch")) {
   getCharById(res, id)
}

if (req.url.includes("detail")) {
    getCharDetail(res, id)
}

}).listen(3001, "localhost");

