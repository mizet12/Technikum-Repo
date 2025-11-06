/*  NODE.JS GLOBAL OBJECTS
    Obiekt globalny process.

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

/* UWAGA
   Obiekt process jest używany w celu uzyskania informacji o wybranym procesie, architekturze,
   systemie operacyjnym itp. Obiekt process stanowi instancję klasy EventEmitter.
 */

console.log("Id procesu: ", process.pid);
console.log("Architektura: ", process.arch);
console.log("System operacyjny: ", process.platform);
// console.log("Dane środowiska: ", process.env);

console.log("Wersja Node: ", process.version);
console.log("Wersja Node (wraz z zależnościami): ", process.versions);

console.log("Katalog bieżący: ", process.cwd());
console.log("Informacje o pamięci: ", process.memoryUsage());

process.stdout.write("Informacje wyświetlane w konsoli ...\n");
process.stderr.write("Informacje o błędzie ...");