export default function CalculaPrazo(dataNascimento) {
  const partesData = dataNascimento.split('/');

  const dia = parseInt(partesData[0], 10);
  const mes = parseInt(partesData[1], 10);
  const ano = parseInt(partesData[2], 10);

  const dataNascimentoObj = new Date(ano, mes - 1, dia);

  const dataAtual = new Date();
  const diferencaEmMilissegundos = dataAtual - dataNascimentoObj;
  const diferencaEmMeses =
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 30.44);

  const mesesAte80Anos = 80 * 12 - diferencaEmMeses;

  return Math.round(mesesAte80Anos);
}
