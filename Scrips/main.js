const userName = window.prompt ("Cuál es tu nombre");

console.log(userName);

if(!userName){ // null or '' --> false ---> !false --->true
    console.log ("Cancelado");
} else if (userName !== "Admin") { // diferente:adiós
    console.log("No te conozco");
} else { // si es Admin y entra
    const userPasword = window.prompt ("Cuál es tu password");

    if(!userPasword){
        console.log ("cancelado");
    } 
    else if (userPasword !== "TheMaster"){
        console.log("Contraseña Incorrecta");
    } else{
        console.log("Bienvenido!");
    }

}
        