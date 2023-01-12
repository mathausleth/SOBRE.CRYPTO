//###START### File - CRYPTO.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    CRYPTO.JS                        }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 12/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.CRYPTO.CreerEmpreinte = function (string, safe = F, algorithm = SOBRE.ENUM.CRYPTO.SHA256) {
        if (typeof string === 'string') {
                let cle = (safe) ? SOBRE.CRYPTO.guard : N;
                cle = (SOBRE.exists(cle)) ? cle : N;
                return (SOBRE.CRYPTO.Chiffrer(string, algorithm, cle));
        }
        return ('bad print');
};
SOBRE.CRYPTO.Chiffrer = function (string, algorithm = SOBRE.ENUM.CRYPTO.SHA256, passphrase = N) {
        const algorithme = SOBRE.ENUM.CRYPTO.GET(algorithm);
        if (SOBRE.exists(this.driver)) {
                if (SOBRE.exists(passphrase)) {
                        let cle = passphrase + SOBRE.CRYPTO.salt;
                        cle = (SOBRE.exists(cle)) ? cle : V;
                        return (this.driver.createHmac(algorithme, cle)
                                .update(string)
                                .digest(SOBRE.ENUM.CRYPTO.HEX));
                } else {
                        return (this.driver.createHash(algorithme)
                                .update(string)
                                .digest(SOBRE.ENUM.CRYPTO.HEX));
                }
        }
        return (N);
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
SOBRE.CRYPTO.driver = N;
SOBRE.CRYPTO.salt = V;
SOBRE.CRYPTO.guard = V;
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - CRYPTO.js //###END###