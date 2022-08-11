function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function matchPassword() {  
    let pass1 = document.getElementById("password1");  
    let pass2 = document.getElementById("password2");  
    if(pass1 != pass2)  
    {   
      let v_matchpassword=true;
    } else {  
      let v_matchpassword=false;
    }  
}

matchPassword()

//1. Ningún campo puede estar vacío.
      //a. generar una variable
function emptyfield (){
      let fields = document.getElementsByTagName("input")
for (const field of fields) {
  if (field.value!="") {
    let v_field=field.value;
  } else {
    let v_field=field.value;
  }
}
}

/*INTENTO MARIANO
let success = document.getElementById("alert-success")
let danger = document.getElementById("alert-danger")
let fields = document.getElementsByClassName("form-control")
let mensajesError = []
function emptyfield (){
if (fields.value = '' ) {
  danger.push ('Ingresa un valor');
}
danger.innerHTML += mensajesError.join(', ');
return false;
}*/

//2. La contraseña debe tener al menos 6 caracteres.

function passwordhigher6 () {
let pass1 = document.getElementById("password1")
if(pass1.value.length == 0)
{
  let v_password1=true;
}
else{
  let v_password1=false;
}
}

//3. Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.

function matchPassword() {  
  let pass1 = document.getElementById("password1");  
  let pass2 = document.getElementById("password2");  
  if(pass1 != pass2)  
  {   
    let v_matchpassword=true;
  } else {  
    let v_matchpassword=false;
  }  
}


//4. Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio."
/*function checkbox_mark(){
  let checkbox_variable = document.getElementById("regBtn")
if (checkbox_variable.value!="")

}*/
