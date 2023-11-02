export default function FormatarData(data) {
  // Divide a string nos caracteres "-"
  const partes = data.split('-');

  // Rearranja as partes na ordem desejada (dia, mês, ano)
  const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

  return dataFormatada;
}
