let saldo = 5000;
let PIN = "1234";

const deposit = document.getElementById("deposit");
const retire = document.getElementById("retire");
const transfer = document.getElementById("transfer");

window.addEventListener("load",checkPass);


deposit.addEventListener("click",depo);
retire.addEventListener("click", reti);
transfer.addEventListener("click", transf)


function depo() {
    const depo = parseFloat(prompt("Ingrese cantidad para depositar:"));
    if (isNaN(depo) || depo <= 0) {
      alert("Cantidad inválida. Intente de nuevo.");
    } else {
      saldo += depo;
      alert(`Se han depositado ${depo.toFixed(2)} €`);
    }
  }

function reti() {
    const reti = parseFloat(prompt("Ingrese cantidad a retirar:"));
    if (isNaN(reti) || reti <= 0 || reti > saldo) {
      alert("Cantidad inválida o insuficiente. Intente de nuevo.");
    } else {
      saldo -= reti;
      alert(`Ha retirado ${reti.toFixed(2)} €`);
    }
  }

function transf() {
    const cuenta = prompt("Ingrese la cuenta a la que desee ingresar el dinero:")
    const transf = prompt("Ingrese cantidad a tranferir:")
}



function checkPass() {
   const response= prompt("¿Cuál es el PIN?")
    if (response !== PIN) {
        alert("Error")
    }
}

