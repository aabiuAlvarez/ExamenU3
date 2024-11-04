
const esPalindromo = (texto) => {
    texto = texto.toLowerCase(); 
    let i = 0, j = texto.length - 1;

    while (i < j) {
        
        if (!/[a-z0-9]/.test(texto[i])) { i++; continue; }
        if (!/[a-z0-9]/.test(texto[j])) { j--; continue; }
        
        
        if (texto[i] !== texto[j]) return false;
    
        
        i++; j--;
    }
    return true;
}


const resultado = esPalindromo("Anita lava la tina") ? "Es un palíndromo" : "No es un palíndromo";
console.log(resultado);