import "dotenv/config";
import http from "http";
import app from "~/app";

const port = process.env.GAMIFLY_SERVER_PORT || 3001;
const server = http.createServer(app);

server.listen(port);
console.log("Payment service listening on http://localhost:" + port);