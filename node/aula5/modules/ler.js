const fs = require("fs").promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf-8');

/* module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};
 */

