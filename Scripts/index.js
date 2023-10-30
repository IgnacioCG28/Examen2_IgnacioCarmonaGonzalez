/**
 *  Autor: Ignacio Carmona González
 *  Github: https://github.com/IgnacioCG28/Examen2_IgnacioCarmonaGonzalez.git
 */

document.addEventListener("DOMContentLoaded", () => {
  let saldo = 5000;
  let PIN_CORRECTO = 1234;
  // Llamadas
  const showSaldo = document.getElementById("cajeroSaldo");
  const changePass = document.getElementById("changePass");

  //Añado un input para tomar el valor del dinero por gusto
  const input = document.getElementById("dinares");

  // Pedida de PIN al usuario
  window.addEventListener("load", () => {
    if (prompt("Escriba su PIN") != PIN_CORRECTO) {
      alert("Error PIN erróneo");
      window.location.href = "/templates/block.html";
    } else {
      showSaldo.innerHTML = `Su saldo es: ${saldo}€`;
    }
  });

  //Eventos

  // Para depositar dinero
  deposit.addEventListener("click", () => {
    const depo = parseFloat(input.value);
    if (isNaN(depo) || depo <= 0) {
      alert("Inválida. Intentelo de nuevo.");
    } else {
      saldo += depo;
      showSaldo.innerHTML = `Su saldo es: ${saldo}€`;
      alert(`Se han depositado ${depo.toFixed(2)} dinares`);
    }
  });

  // Para retirar dinero de la cuenta
  retire.addEventListener("click", () => {
    const reti = parseFloat(input.value);
    if (isNaN(reti) || reti <= 0 || reti > saldo) {
      alert("Cantidad inválida o insuficiente. Intente de nuevo.");
    } else {
      saldo -= reti;
      showSaldo.innerHTML = `Su saldo es: ${saldo}€`;
      alert(`Ha retirado ${reti.toFixed(2)} €`);
    }
  });
  // Funcion transferencia y validacion IBAN
  function validateIBAN(cuenta) {
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuenta);
  }

  transfer.addEventListener("click", () => {
    const transf = parseFloat(input.value);
    if (isNaN(transf) || transf <= 0 || transf > saldo) {
      alert("Transfiera cantidad válida.");
    } else {
      const cuenta = prompt("Ingrese número de cuenta de destino:");
      validateIBAN(cuenta);
      saldo -= transf;
    }
  });

  // Función de cambiar PIN:
  // Creo evento y le meto la función "cambiarPIN"
  changePass.addEventListener("click", cambiarPIN);

  // Esta función pide meter el pin original, si es correcto te pide el nuevo y saca en consola los cambios para verificar
  function cambiarPIN() {
    const pass1 = parseInt(prompt("Escriba su PIN actual:"));
    if (pass1 !== PIN_CORRECTO) {
      alert("Fallo Contraseña");
    } else {
      const pass2 = parseInt(prompt("Escriba su nuevo PIN"));
      console.log(`La antigua contraseña es ${PIN_CORRECTO}`);
      if (isNaN(pass2)) {
        alert("Te he dicho digitos.");
      } else {
        PIN = pass2;
        console.log(`La nueva contraseña es ${PIN}`);
      }
    }
  }
  exit.addEventListener("click", () => {
    window.location.href = "/templates/exit.html";
  });
});
