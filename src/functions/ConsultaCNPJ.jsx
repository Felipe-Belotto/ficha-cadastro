const empresaNaoEncontrada = {
  razao_social: 'CNPJ nao encontrado',
  data_inicio_atividade: '0000-00-00',
};

export default async function consultaCNPJ(cnpj) {
  const formatadoCNPJ = cnpj.replace(/[./-]/g, '');

  try {
    const response = await fetch(`https://minhareceita.org/${formatadoCNPJ}`);

    if (response.ok) {
      const responseData = await response.json();
      /* console.log(responseData); */
      return responseData;
    } else if (response.status === 404) {
      throw new Error('CNPJ não encontrado');
    } else {
      throw new Error(`Erro na consultaCNPJ: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro na consultaCNPJ:', error.message);
    alert('CNPJ não encontrado no sistema da receita federal');
    return empresaNaoEncontrada;
  }
}
