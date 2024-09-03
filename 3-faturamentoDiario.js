const faturamentoDiario = [500, 600, 700, 800, 0, 300, 400, 0, 900, 1000]; // Exemplo de dados

function calcularFaturamento(faturamento) {
  let total = 0;
  let diasComFaturamento = 0;
  let menorValor = Infinity;
  let maiorValor = -Infinity;

  faturamento.forEach((valor) => {
    if (valor > 0) {
      total += valor;
      diasComFaturamento++;
      if (valor < menorValor) menorValor = valor;
      if (valor > maiorValor) maiorValor = valor;
    }
  });

  let mediaMensal = total / diasComFaturamento;

  let diasAcimaDaMedia = faturamento.filter(
    (valor) => valor > mediaMensal
  ).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  };
}

console.log(calcularFaturamento(faturamentoDiario));
