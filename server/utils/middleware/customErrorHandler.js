import logger from "../logger";

const customErrorHandler = (err, req, res, next) => {
  if (err.name === "MongoError") {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        let error = err.errors[errName].message;
        logger.error(error);
        return res.status(400).send(error);
      } else {
        logger.error("❌️ MongoError Occoured");
        return res.status(400).send({ error: "❌️ MongoError Occoured" });
      }
    }
  } else if (err.name === "ValidationError") {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        let error = err.errors[errName].message;
        logger.error("❌️ Validation Error occoured");
        return res.status(400).send({ error });
      }
    }
  } else if (err.name === "UnauthorizedError") {
    logger.error("❌️ Unauthorized JWT Error occoured");
    return res.status(400).send({ error: err.message });
  }
  next(err);
};

export default customErrorHandler;
