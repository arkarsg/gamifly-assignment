import http from "http";
import app from "~/app";
import config from "~/config/config";
import { checkDb } from "~/db";

const port = config().GAMIFLY_SERVER_PORT;
const server = http.createServer(app);

server.listen(port, () => {
  void checkDb();
});
console.log("Payment service listening on http://localhost:" + port);
