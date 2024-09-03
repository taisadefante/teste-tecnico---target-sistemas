function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

// Exemplo de uso
let string = "exemplo"; // Substitua por qualquer string
console.log(inverterString(string));
