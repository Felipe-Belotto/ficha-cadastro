import React, { createContext, useState } from 'react';

const CadastroContext = createContext();

const CadastroProvider = ({ children }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [pis, setPis] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cepLogradouro, setCEPLogradouro] = useState('');
  const [cepBairro, setCEPBairro] = useState('');
  const [cepLocalidade, setCEPLocalidade] = useState('');
  const [cepUF, setCEPUF] = useState('');
  const [cepNumero, setCENumero] = useState('');
  const [cepComplemento, setCEPComplemento] = useState('');
  const [renda, setRenda] = useState(''); // Se for um valor único

  const [listaRendas, setListaRendas] = useState([]);

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
    listaRendas,
    status,
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
    setListaRendas,
    setStatus,
  };

  return (
    <CadastroContext.Provider value={contextValue}>
      {children}
    </CadastroContext.Provider>
  );
};

export { CadastroProvider, CadastroContext };
