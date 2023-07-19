//import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { readFile } from "node:fs";

createServer(function (req, res) {
  readFile("users.json", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(data);
    return res.end();
  });
}).listen(6060);

// const getBooks = async () => {
//   const books = await readFile("users.json");
//   console.log(JSON.parse(books));
// };

// getBooks();
