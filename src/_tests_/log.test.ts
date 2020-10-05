import log4js from "log4js";
import { debug } from "console";
const logger = log4js.getLogger();
logger.level = "warn";
// logger.level = process.env.LOG_LEVEL || "error";
describe("Log", () => {
  test("should", async () => {
    logger.debug("debug");
    logger.info("info");
    logger.warn("warn");
    logger.error("error");
    logger.fatal("fatal");
  });
  test("Test", async () => {
    logger.info("Some info messages");
    console.info("Some console info messages");
  });
});
