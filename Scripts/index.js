let saldo = 5000;
let PIN = "1234";
// Llamadas
const deposit = document.getElementById("deposit");
const retire = document.getElementById("retire");
const transfer = document.getElementById("transfer");
const password = document.getElementById("changePass");
const showSaldo = document.getElementById("cajeroSaldo");

// Evento al cargar
window.addEventListener("load",() => {
    const response= prompt("¿Cuál es el PIN?")
    if (response !== PIN) {
        alert("Error")
    }else{
        showSaldo.innerHTML = `Su saldo es ${saldo}`;
    }
});

//Eventos

deposit.addEventListener("click",() => {
    const depo = parseFloat(prompt("Ingrese cantidad para depositar:"));
    if (isNaN(depo) || depo <= 0) {
      alert("Inválida. Intentelo de nuevo.");
    } else {
      saldo += depo;
      alert(`Se han depositado ${depo.toFixed(2)} dinares`);
    }
});

retire.addEventListener("click", () =>{
    const reti = parseFloat(prompt("Ingrese cantidad a retirar:"));
    if (isNaN(reti) || reti <= 0 || reti > saldo) {
      alert("Cantidad inválida o insuficiente. Intente de nuevo.");
    } else {
      saldo -= reti;
      alert(`Ha retirado ${reti.toFixed(2)} €`);
    }
});

transfer.addEventListener("click", () => {
    const cuenta = prompt("Ingrese la cuenta a la que desee ingresar el dinero:")
    const transf = parseFloat(prompt("Ingrese cantidad a tranferir:"));
    if (isNaN(transf || transf <= 0 || transf >= saldo)) {
        alert("No tienes esos dinares")
    } else {
        const response = alert(`Has ingresado ${transf}€ a la cuenta ${cuenta}`);
    }
});

password.addEventListener("click", () =>{
const pass = parseInt(prompt("Escriba la nueva contraseña de digitos:"))
if (isNaN(pass)) {
    alert("Te he dicho digitos.")
} else {
    PIN = pass;
} 
});

