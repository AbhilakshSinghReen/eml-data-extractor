import { readdir } from "fs/promises";

async function readdirWithoutGitkeep(dirPath) {
  const entries = await readdir(dirPath);
  const filteredEntries = entries.filter((file) => file !== ".gitkeep");
  return filteredEntries;
}

export { readdirWithoutGitkeep };
