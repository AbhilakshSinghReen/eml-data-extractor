import { existsSync, mkdirSync } from "fs";
import { dirname as pathDirname, join as pathJoin } from "path";

const repoDir = process.cwd();
const srcDir = pathJoin(repoDir, "src");
const inputsDir = pathJoin(repoDir, "inputs");
const outputsDir = pathJoin(repoDir, "outputs");

if (!existsSync(outputsDir)) {
  mkdirSync(outputsDir);
}

export { inputsDir, outputsDir };
