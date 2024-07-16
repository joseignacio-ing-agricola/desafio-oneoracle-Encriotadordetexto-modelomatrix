// Añade un evento al botón de encriptar que se activa al hacer clic
document.getElementById('encrypt-button').addEventListener('click', function() {
    // Obtiene el valor del texto de entrada y elimina espacios en blanco al inicio y al final
    let inputText = document.getElementById('input-text').value.trim();
    // Verifica si el texto de entrada está vacío
    if (inputText === '') {
        // Limpia el valor del cuadro de texto de salida y muestra una imagen de fondo
        document.getElementById('output-text').value = '';
        document.getElementById('output-text').style.backgroundImage = 'url("img/Muñeco.jpg")'; // Ruta de tu imagen de placeholder
    } else {
        // Encripta el texto de entrada
        let encryptedText = encryptText(inputText);
        // Elimina la imagen de fondo del cuadro de texto de salida si hay texto
        document.getElementById('output-text').style.backgroundImage = 'none';
        // Muestra el texto encriptado en el cuadro de texto de salida
        document.getElementById('output-text').value = encryptedText;
    }
});

// Añade un evento al botón de desencriptar que se activa al hacer clic
document.getElementById('decrypt-button').addEventListener('click', function() {
    // Obtiene el valor del texto de entrada y elimina espacios en blanco al inicio y al final
    let inputText = document.getElementById('input-text').value.trim();
    // Verifica si el texto de entrada está vacío
    if (inputText === '') {
        // Limpia el valor del cuadro de texto de salida y muestra una imagen de fondo
        document.getElementById('output-text').value = '';
        document.getElementById('output-text').style.backgroundImage = 'url("img/Muñeco.jpg")'; // Ruta de tu imagen de placeholder
    } else {
        // Desencripta el texto de entrada
        let decryptedText = decryptText(inputText);
        // Elimina la imagen de fondo del cuadro de texto de salida si hay texto
        document.getElementById('output-text').style.backgroundImage = 'none';
        // Muestra el texto desencriptado en el cuadro de texto de salida
        document.getElementById('output-text').value = decryptedText;
    }
});

// Añade un evento al botón de copiar que se activa al hacer clic
document.getElementById('copy-button').addEventListener('click', function() {
    // Selecciona el texto del cuadro de texto de salida
    var outputText = document.getElementById('output-text');
    outputText.select();
    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');
    
    // Cambia el texto del botón a 'Copiado!' temporalmente
    var copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copiado!';
    // Restaura el texto del botón a 'Copiar' después de 2 segundos
    setTimeout(function() {
        copyButton.textContent = 'Copiar';
    }, 2000);
});

// Función para encriptar el texto utilizando un cifrado César simple
function encryptText(text) {
    let shift = 3; // Desplazamiento para el cifrado
    // Convierte cada carácter del texto según el desplazamiento
    let encryptedText = text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // Cifra letras mayúsculas
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Cifra letras minúsculas
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            // Deja otros caracteres sin cambios
            return char;
        }
    }).join('');
    return encryptedText;
}



// Función para desencriptar el texto utilizando un cifrado César simple
function decryptText(text) {
    let shift = 3; // Desplazamiento para el descifrado
    // Convierte cada carácter del texto según el desplazamiento
    let decryptedText = text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // Descifra letras mayúsculas
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Descifra letras minúsculas
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        } else {
            // Deja otros caracteres sin cambios
            return char;
        }
    }).join('');
    return decryptedText;
}

