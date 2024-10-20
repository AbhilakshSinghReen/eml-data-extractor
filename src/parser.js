import { createReadStream } from "fs";

import EmlParser from "eml-parser";

async function parseEml(emailFilePath) {
  const emailFile = createReadStream(emailFilePath);
  const emlParser = new EmlParser(emailFile);
  const result = await emlParser.parseEml();

  return result;
}

export { parseEml };
