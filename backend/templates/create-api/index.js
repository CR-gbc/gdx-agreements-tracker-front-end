const fs = require("fs");
const consoleSuccess = "\x1b[32m";
const consoleError = "\x1b[31m";
const consoleClear = "\x1b[0m";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const templateTypes = ["controllers", "models", "routes", "validators"];

const templateIndexes = templateTypes.map((type) => {
  return `${__dirname}/template-files/${type}/index.js`;
});

readline.question(
  "\n\n What is the name of the database table you'd like to create an API for?",
  (databaseTableName) => {
    const mapObj = {
      $databaseTableName: databaseTableName,
    };

    templateIndexes.forEach((templateIndex, i) => {
      fs.readFile(templateIndex, "utf8", (err, data) => {
        let variableReplacements = data.replace(
          /\$databaseTableName/gi,
          (matched) => mapObj[matched]
        );
        if (err) {
          return console.log(consoleError, err);
        } else {
          console.log(consoleSuccess, `Success! ${templateTypes[i]} created!`);
          console.log(consoleClear, ""); //Reset colors
        }
        fs.appendFile(
          `src/${templateTypes[i]}/${databaseTableName}.js`,
          variableReplacements,
          "utf8",
          (err) => {
            if (err) return console.log(consoleError, err);
          }
        );
      });
    });
  }
);
