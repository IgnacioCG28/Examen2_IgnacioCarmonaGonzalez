document.addEventListener("DOMContentLoaded", () => {
  let saldo = 5000;
  let PIN_CORRECTO = 1234;
  // Llamadas
  const showSaldo = document.getElementById("cajeroSaldo");
  const changePass = document.getElementById("changePass");

  //Añado un input para tomar el valor del dinero por gusto
  const input = document.getElementById("dinares");

  // Evento al cargar
  window.addEventListener("load", () => {
    const response = parseInt(prompt("¿Cuál es el PIN?"));
    const intentos = 3;
    if (response !== PIN_CORRECTO) {
      alert(`Fallo PIN. Intentos ${intentos}`);
      intentos -= 1;
    } else {
        if (intentos === 0) {
            
        } else {
            showSaldo.innerHTML = `Su saldo es: ${saldo}€`;

        }
    }
  });

  //Eventos

  // Para depositar dinero
  deposit.addEventListener("click", () => {
   //const depo = parseFloat(prompt("Ingrese cantidad para depositar:"));
   const depo = parseFloat(input.value);
    if (isNaN(depo) || depo <= 0) {
      alert("Inválida. Intentelo de nuevo.");
    } else {
      saldo += depo;
      showSaldo.innerHTML = `Su saldo es ${saldo}€`;
      alert(`Se han depositado ${depo.toFixed(2)} dinares`);
    }
  });

  // Para retirar dinero de la cuenta
  retire.addEventListener("click", () => {
    //const reti = parseFloat(prompt("Ingrese cantidad a retirar:"));
    const reti = parseFloat(input.value);
    if (isNaN(reti) || reti <= 0 || reti > saldo) {
      alert("Cantidad inválida o insuficiente. Intente de nuevo.");
    } else {
      saldo -= reti;
      showSaldo.innerHTML = `Su saldo es: ${saldo}€`;
      alert(`Ha retirado ${reti.toFixed(2)} €`);
    }
  });

  // Para transferir dinero a otra cuenta
  transfer.addEventListener("click", () => {
    const cuenta = prompt(
      "Ingrese la cuenta a la que desee ingresar el dinero:"
    );
    //const transf = parseFloat(prompt("Ingrese cantidad a tranferir:"));
    const reti = parseFloat(input.value);
    if (isNaN(transf || transf >= saldo || transf <= 0)) {
      alert("No tienes esos dinares");
    } else {
      saldo -= transf;
      showSaldo.innerHTML = `Su saldo es: ${saldo}€`;
      alert(`Has ingresado ${transf}€ a la cuenta ${cuenta}`);
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

  exit.addEventListener("click", () =>{
    
  })
});
