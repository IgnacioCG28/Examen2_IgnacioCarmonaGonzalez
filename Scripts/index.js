document.addEventListener("DOMContentLoaded", () => {
  let saldo = 5000;
  let PIN = 1234;
  // Llamadas
  const showSaldo = document.getElementById("cajeroSaldo");

  // Evento al cargar
  window.addEventListener("load", () => {
    const response = parseInt(prompt("¿Cuál es el PIN?"));
    if (response !== PIN) {
      alert("Error");
    } else {
      showSaldo.innerHTML = `Su saldo es ${saldo}`;
    }
  });

  //Eventos

  deposit.addEventListener("click", () => {
    const depo = parseFloat(prompt("Ingrese cantidad para depositar:"));
    if (isNaN(depo) || depo <= 0) {
      alert("Inválida. Intentelo de nuevo.");
    } else {
      saldo += depo;
      showSaldo.innerHTML = `Su saldo es ${saldo}`;
      alert(`Se han depositado ${depo.toFixed(2)} dinares`);
    }
  });

  retire.addEventListener("click", () => {
    const reti = parseFloat(prompt("Ingrese cantidad a retirar:"));
    if (isNaN(reti) || reti <= 0 || reti > saldo) {
      alert("Cantidad inválida o insuficiente. Intente de nuevo.");
    } else {
      saldo -= reti;
      showSaldo.innerHTML = `Su saldo es ${saldo}`;
      alert(`Ha retirado ${reti.toFixed(2)} €`);
    }
  });

  transfer.addEventListener("click", () => {
    const cuenta = prompt(
      "Ingrese la cuenta a la que desee ingresar el dinero:"
    );
    const transf = parseFloat(prompt("Ingrese cantidad a tranferir:"));
    if (isNaN(transf || transf <= 0 || transf >= saldo)) {
      alert("No tienes esos dinares");
    } else {
      saldo -= transf;
      showSaldo.innerHTML = `Su saldo es ${saldo}`;
      alert(`Has ingresado ${transf}€ a la cuenta ${cuenta}`);
    }
  });

  changePass.addEventListener("click", () => {
    const pass1 = parseInt(prompt("Escriba su PIN actual:"));
    if (pass1 !== PIN) {
      alert("Fallo Contraseña");
    } else {
      const pass2 = parseInt(prompt("Escriba su nuevo PIN"));
      if (isNaN(pass2)) {
        alert("Te he dicho digitos.");
      } else {
        PIN = pass2;
      }
    }
  });
});
