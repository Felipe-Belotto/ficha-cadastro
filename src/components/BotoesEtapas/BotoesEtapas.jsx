import { useContext, useEffect } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import styles from '../Formulario/Formulario.module.css';
import { Button } from '@mui/material';

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
    somaRendas,
    listaRendas,
    listaProponentes,
    setListaProponentes,
    status,
    setStatus,
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
  } = useContext(CadastroContext);

  function voltar() {
    if (status != 3) {
      if (status !== 1 && status >= 1) {
        setStatus(status - 1);
      }
    }
  }

  function avancar() {
    if (status === 3) {
      /* Cria um proponente */
      const Proponente = {
        nome: nome,
        cpf: cpf,
        estadoCivil: estadoCivil,
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
      };

      setListaProponentes([...listaProponentes, Proponente]);

      /* Apagar estados anteriores */

      setNome('');
      setCPF('');
      setEstadoCivil('');
      setPis('');
      setCelular('');
      setEmail('');
      setCEP('');
      setCEPLogradouro('');
      setCEPBairro('');
      setCEPLocalidade('');
      setCEPUF('');
      setCENumero('');
      setCEPComplemento('');
      setRenda('');
      setSomaRendas('');
      setListaRendas([]);

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
<<<<<<< HEAD
          display: status < 6 ? 'flex' : 'none',
=======
          display: status === 5 ? 'none' : 'flex',
>>>>>>> 24b839f5929ed7cf5341985104c001e70eaaede1
          alignItems: 'center',
          backgroundColor: '#1f467e',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={avancar}
      >
        Avançar
      </Button>
    </section>
  );
}
