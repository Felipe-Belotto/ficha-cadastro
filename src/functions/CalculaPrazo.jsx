export default function CalculaPrazo(dataNascimento) {
  const [dia, mes, ano] = dataNascimento.split('/');

  const dataNascimentoObj = new Date(`${ano}-${mes}-${dia}`);

  const dataAtual = new Date();

  const data80Anos = new Date(dataNascimentoObj);
  data80Anos.setFullYear(data80Anos.getFullYear() + 80);

  const diferencaMeses = Math.ceil(
    (data80Anos - dataAtual) / (30 * 24 * 60 * 60 * 1000),
  );

  return diferencaMeses;
}
