import logger from "../logger";

const unknownApiEndpoint = (req, res) => {
  logger.error("❌️ unknown api endpoint");
  return res.status(404).send({ error: "👀 Unknown Api Endpoint" });
};

export default unknownApiEndpoint;
