import React, { createContext, useState } from 'react';

const CadastroContext = createContext();

const CadastroProvider = ({ children }) => {
  /* Dados pessoais */
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [pis, setPis] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');

  /* Endereço */
  const [cep, setCEP] = useState('');
  const [cepLogradouro, setCEPLogradouro] = useState('');
  const [cepBairro, setCEPBairro] = useState('');
  const [cepLocalidade, setCEPLocalidade] = useState('');
  const [cepUF, setCEPUF] = useState('');
  const [cepNumero, setCEPNumero] = useState('');
  const [cepComplemento, setCEPComplemento] = useState('');

  /* Renda */
  const [empresaAtual, setEmpresaAtual] = useState('');

  const [renda, setRenda] = useState('');
  const [listaRendas, setListaRendas] = useState([]);
  const [somaRendas, setSomaRendas] = useState(0);

  /* Proponentes */
  const [listaProponentes, setListaProponentes] = useState([]);

  /* Proposta */

  const [tipoImovel, setTipoImovel] = useState('');
  const [condicaoImovel, setCondicaoImovel] = useState('');
  const [compraEVenda, setCompraEVenda] = useState('');
  const [financiamento, setFinanciamento] = useState('');
  const [enquadramento, setEnquadramento] = useState('');
  const [fgts, setFGTS] = useState('');
  const [observacao, setObservacao] = useState('');

  /* Status */
  const [status, setStatus] = useState(4);

  const contextValue = {
    nome,
    cpf,
    estadoCivil,
    pis,
    celular,
    email,
    cep,
    cepLogradouro,
    cepBairro,
    cepLocalidade,
    cepUF,
    cepNumero,
    cepComplemento,
    empresaAtual,
    renda,
    somaRendas,
    listaRendas,
    listaProponentes,
    status,
    tipoImovel,
    condicaoImovel,
    compraEVenda,
    financiamento,
    enquadramento,
    fgts,
    observacao,
    setNome,
    setCPF,
    setEstadoCivil,
    setPis,
    setCelular,
    setEmail,
    setCEP,
    setCEPLogradouro,
    setCEPBairro,
    setCEPLocalidade,
    setCEPUF,
    setCEPNumero,
    setCEPComplemento,
    setEmpresaAtual,
    setRenda,
    setSomaRendas,
    setListaRendas,
    setStatus,
    setListaProponentes,
    setCondicaoImovel,
    setTipoImovel,
    setCompraEVenda,
    setFinanciamento,
    setEnquadramento,
    setFGTS,
    setObservacao,
  };

  return (
    <CadastroContext.Provider value={contextValue}>
      {children}
    </CadastroContext.Provider>
  );
};

export { CadastroProvider, CadastroContext };
