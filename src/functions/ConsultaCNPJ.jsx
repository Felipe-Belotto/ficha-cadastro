export default async function ConsultaCNPJ(cnpj) {
  const url = `https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-empresa/v2/empresa/${cnpj}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer api-cnpj-v1`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(`Erro ao consultar CNPJ: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
