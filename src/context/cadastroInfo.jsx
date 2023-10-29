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
  const [cepNumero, setCENumero] = useState('');
  const [cepComplemento, setCEPComplemento] = useState('');

  /* Renda */
  const [renda, setRenda] = useState('');
  const [listaRendas, setListaRendas] = useState([]);
  const [somaRendas, setSomaRendas] = useState(0);

  /* Proposta */
  const [compraEVenda, setCompraEVenda] = useState('');
  const [financiamento, setFinanciamento] = useState('');
  const [enquadramento, setEnquadramento] = useState('');
  const [fgts, setFGTS] = useState('');
  const [observacao, setObservacao] = useState('');

  /* Status */
  const [status, setStatus] = useState(1);

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
    renda,
    somaRendas,
    listaRendas,
    status,
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
    setCENumero,
    setCEPComplemento,
    setRenda,
    setSomaRendas,
    setListaRendas,
    setStatus,
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
