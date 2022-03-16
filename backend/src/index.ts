import variables from "./config/variables";
import server from "./server";
import { logger } from "./utils/logger";

server.listen(3000)
  .on(
    'listening', 
    () => logger.info(`🚀 Server is running at: http://localhost:${variables.port}`)
  );
