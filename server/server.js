import mongoose from "mongoose";
import config from "./../config/config";
import app from "./express";
import logger from "./utils/logger";

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(config.port, () => {
      logger.info(`✅️ Server started on port ${config.port}`);
    });
  })
  .catch((err) => logger.error(err));
