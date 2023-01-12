const { SOBRE } = require('../SOBRE.js.js');
let filehash = "0F38A36FE8FA";
//
let crypto = require('crypto');
SOBRE.CRYPTO.driver = crypto;
SOBRE.CRYPTO.guard = "GuArD";
SOBRE.CRYPTO.salt = "C'est salé !";
// Avec un HASHMAC
let sha256 = crypto.createHmac("sha256", SOBRE.CRYPTO.guard + SOBRE.CRYPTO.salt);
let code = sha256.update(filehash).digest("hex");
let result1 = code.toString().toUpperCase();
let result2 = SOBRE.CRYPTO.CreerEmpreinte(filehash, true).toUpperCase();
console.log(result1);
console.log(result2);
if (result1 === result2) console.log("les hashmac sont identiques");
// Avec un HASH
sha256 = crypto.createHash("sha256");
code = sha256.update(filehash).digest("hex");
result1 = code.toString().toUpperCase();
result2 = SOBRE.CRYPTO.CreerEmpreinte(filehash).toUpperCase();
console.log(result1);
console.log(result2);
if (result1 === result2) console.log("les hash sont identiques");