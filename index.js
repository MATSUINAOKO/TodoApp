const app = require("./server");
const PORT = process.env.PORT || 3500;
const database = require("./knex");
const server = app();
server.listen(PORT, () => console.log(`listening on port : ${PORT}`));
