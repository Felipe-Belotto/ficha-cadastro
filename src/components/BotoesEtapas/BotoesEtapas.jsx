import { useContext, useEffect } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import styles from '../Formulario/Formulario.module.css';
import { Button } from '@mui/material';
import CalculaPrazo from '../../functions/CalculaPrazo';

export default function BotoesEtapas() {
  const {
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
    nascimento,
    somaRendas,
    listaRendas,
    listaProponentes,
    setListaProponentes,
    status,
    setStatus,
    setNome,
    setCPF,
    setEstadoCivil,
    setNascimento,
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
    setRenda,
    setSomaRendas,
    setListaRendas,
  } = useContext(CadastroContext);

  function voltar() {
    setStatus(status - 1);
  }

  const prazoSemLimite = CalculaPrazo(nascimento);
  const prazoMaximo = prazoSemLimite > 420 ? 420 : prazoSemLimite;

  function avancar() {
    if (status === 3) {
      /* Cria um proponente */
      if (nome !== '' && cpf !== '') {
        const Proponente = {
          nome: nome,
          cpf: cpf,
          estadoCivil: estadoCivil,
          nascimento: nascimento,
          pis: pis,
          celular: celular,
          email: email,
          cep: cep,
          cepLogradouro: cepLogradouro,
          cepBairro: cepBairro,
          cepLocalidade: cepLocalidade,
          cepUF: cepUF,
          cepNumero: cepNumero,
          cepComplemento: cepComplemento,
          somaRendas: somaRendas,
          listaRendas: listaRendas,
          prazo: prazoMaximo,
        };

        /* Para organizar a lista de proponentes por ordem alfabética */
        const listaSemOrganizar = [...listaProponentes, Proponente];
        const listaOrganizada = listaSemOrganizar.sort((a, b) =>
          a.nome.localeCompare(b.nome),
        );

        setListaProponentes([...listaOrganizada]);

        /* Apagar estados anteriores */

        setNome('');
        setCPF('');
        setEstadoCivil('');
        setNascimento('');
        setPis('');
        setCelular('');
        setEmail('');
        setCEP('');
        setCEPLogradouro('');
        setCEPBairro('');
        setCEPLocalidade('');
        setCEPUF('');
        setCEPNumero('');
        setCEPComplemento('');
        setRenda('');
        setSomaRendas('');
        setListaRendas([]);
      }
      setStatus(status + 1);
    } else {
      if (status >= 1 && status < 6) {
        setStatus(status + 1);
      }
    }
  }

  return (
    <section className={styles.containerBotoes}>
      <Button
        variant="outlined"
        style={{
          minWidth: '150px',
          display: status === 1 || status === 4 ? 'none' : 'flex',
          backgroundColor: '#021c4097',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={voltar}
      >
        Voltar
      </Button>

      <Button
        variant="outlined"
        style={{
          minWidth: '150px',
          display: status < 6 ? 'flex' : 'none',
          alignItems: 'center',
          backgroundColor: '#1f467e',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={avancar}
      >
        {status === 3 ? 'Salvar' : 'Avançar'}
      </Button>
    </section>
  );
}
