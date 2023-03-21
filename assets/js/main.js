// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21
let nome = prompt("Nome")
console.log(nome);

let cognome = prompt("Cognome")
console.log(cognome);

let colore = prompt("Colore preferito")
console.log(colore);

console.log(
  `${nome}${cognome}${colore}21` 
);

document.getElementById("pswdgen").innerHTML=`<p>${nome}${cognome}${colore}21</p>`