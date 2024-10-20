import csvWriterCreators from "csv-writer";

const createCsvWriter = csvWriterCreators.createObjectCsvWriter;

async function writeCsv(outputPath, header, records) {
  const csvWriter = createCsvWriter({
    path: outputPath,
    header: header,
  });

  await csvWriter.writeRecords(records);
}

export { writeCsv };
