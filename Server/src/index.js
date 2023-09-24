var http = require("http");
const characters = require("./utils/data.js")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        let currentID = Number(req.url.split('/').pop());
        let character = characters.filter(character => character.id === currentID);
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character[0]));
    }
}).listen(3001, "localhost");