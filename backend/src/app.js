import "dotenv/config";

import { createServer } from "http";
import app from "./config/exppress";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5000;

const server = createServer(app);


server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
