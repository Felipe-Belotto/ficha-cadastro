export default async function consultaCEP(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.status === 400) {
      throw new Error('CEP inválido');
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('Erro na consultaCEP:', error);
    return null;
  }
}
