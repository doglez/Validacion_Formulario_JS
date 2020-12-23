/**
 * Ejercicio para validacion de inputs, todos los mensajes son en cosola
 */

let formulario = document.querySelector('form');
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');
let reemail = document.querySelector('#reemail');
let password = document.querySelector('#password');
let titulo = document.querySelector('#titulo');
let mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    
})

// Ejercicio 1.1)
nombre.addEventListener('blur', ValDatos);


// Ejercicio 1.2)
apellido.addEventListener('blur', ValDatos);

/**
 * Funcion para validar que los datos ingresados sean 2 palabras maximo y que no tengan espacios enfrente, ni doble espacio en medio, ni espacio al final
 * Llamada por el evento Blur
 * Recibe el evento
 * Retorna un true si los datos son correctos
 * Retorna un false si los datos son incorrectos
 */

function ValDatos(e) {
    let texto = e.target.value;

    //Quitar espacios enfrente, al final y solo dejar un espacio intermedio
    espacioBlancoInicio = /^ /;
    espacioBlancoFinal = / $/;
    espacioBlancoIntermedio = /[ ]+/g;

    //Remplazo de espacios en blanco en el input
    texto = texto.replace(espacioBlancoIntermedio, " ");
    texto = texto.replace(espacioBlancoInicio, "");
    texto = texto.replace(espacioBlancoFinal, "");    

    let textoTruncado = texto.split(" ");

    let textoFinal = textoTruncado[0];

    if (textoFinal.length > 2) {
        if (textoTruncado[1]) {
            if (textoTruncado[1].length > 2) {
                textoFinal = textoFinal + " " + textoTruncado[1];
                console.log(textoFinal);
            } else {
                console.log('Los nombres y apellidos deben de ser mayor a 2 letras')        
            }
        } else {
            console.log(textoFinal);
        }

    } else {
        console.log('Los nombres y apellidos deben de ser mayor a 2 letras')
    }
}




// Ejercicio 1.3)
email.addEventListener('blur', e => {
    //Formato que debe tener la exprecion regular para validar el email
    let emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //validacion del email
    if (emailRegExp.test(e.target.value)) {
        console.log('Email esta formato correcto');
    } else {
        console.log('Email no tiene formato correcto')
    }
})

// Ejercicio 1.4)
reemail.addEventListener('blur', e => {
    if (e.target.value == email.value) {
        console.log('Email conisiden');
    } else {
        console.log('Los emails deben ser iguales');
    }
})


// Ejercicio 1.5)
password.addEventListener('blur', e=> {
    //Exprecion regular que valida la longitud de 6 a 16 caracteres, no tenga espacios en blanco, al menos un numero, un caracter especial y una letra mayuscula
    let passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*+/~'"{}()_-])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*+/~'"{}()_-]{6,16}$/;

    if (passwordRegExp.test(e.target.value)) {
        console.log('Passwor cumple')
    } else {
        console.log('El password debe contener al menos una letra mayuscula, un numero y un caracter especial, debe de tener una longitud entre 6 y 16 caracteres, no contener espacios en blanco');
    }
})
