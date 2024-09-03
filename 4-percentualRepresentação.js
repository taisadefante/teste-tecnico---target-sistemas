const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamento) {
  const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] =
      ((faturamento[estado] / total) * 100).toFixed(2) + "%";
  }

  return percentuais;
}

console.log(calcularPercentuais(faturamentoEstados));
