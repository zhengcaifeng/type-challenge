const path = require("path");
const fs = require("fs");


const fileName = process.argv.slice(2)[0]
const filePath = `${path.resolve()}/src/${fileName}`
const writeStr = '';

fs.mkdir(filePath, (err) => {
  if (err) throw err
})

fs.writeFile(`${filePath}/template.ts`, "", { flag: "a" }, (err) => {});

fs.writeFile(`${filePath}/ts-cases.ts`, writeStr, { flag: "a" }, (err) => {
  if (err) throw err;
});


