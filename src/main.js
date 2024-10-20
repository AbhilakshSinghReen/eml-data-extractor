import { join as pathJoin } from "path";

import { inputsDir, outputsDir } from "./dirs.js";
import { getHeaderRow, extractData } from "./extractor.js";
import { readdirWithoutGitkeep } from "./utils.js";
import { writeCsv } from "./writer.js";

async function main() {
  const inputFiles = await readdirWithoutGitkeep(inputsDir);
  const inputFileAbsPaths = inputFiles.map((filename) => pathJoin(inputsDir, filename));

  const emlExtractedData = await Promise.all(inputFileAbsPaths.map(async (filePath) => await extractData(filePath)));

  const csvHeaderRow = getHeaderRow();
  const outputCsvPath = pathJoin(outputsDir, "output-main.csv");
  await writeCsv(outputCsvPath, csvHeaderRow, emlExtractedData);
}

main();
