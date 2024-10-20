import { basename as pathBasename } from "path";

import { parseEml } from "./parser.js";

function getHeaderRow() {
  return [
    {
      id: "emlFileName",
      title: "eml file name",
    },
    {
      id: "returnPath",
      title: "Candidate Email",
    },
  ];
}

async function extractData(emlFilePath) {
  const parsedEml = await parseEml(emlFilePath);

  let returnPath = "";
  try {
    returnPath = parsedEml.headers.get("return-path").text;
  } catch (error) {
    console.log(`'return-path' key not found in headers of the eml file at ${emlFilePath}`);
    returnPath = "returnPath key not found";
  }

  return {
    emlFileName: pathBasename(emlFilePath),
    returnPath: returnPath,
  };
}

export { getHeaderRow, extractData };
