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
    let money = parseFloat(prompt("Cantidad a depositar:"))
    if (isNaN(money) || money <= 0) {
        alert("Cantidad erronea")
    }else {
        saldo +=money;
        console.log(saldo);
    }
}

function reti() {
    
}

function transf() {
    
}



function checkPass() {
   const response= prompt("¿Cuál es el PIN?")
    if (response !== PIN) {
        alert("Error")
    }
}