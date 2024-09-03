function isFibonacci(numero) {
  let a = 0,
    b = 1,
    c = a + b;

  if (numero === a || numero === b) return true;

  while (c <= numero) {
    if (c === numero) return true;
    a = b;
    b = c;
    c = a + b;
  }

  return false;
}

// Exemplo
let number = 21; // numero definido no codigo
console.log(
  isFibonacci(number)
    ? `${number} pertence à sequência de Fibonacci`
    : `${number} não pertence à sequência de Fibonacci`
);
