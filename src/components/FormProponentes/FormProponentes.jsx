import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import styles from '../Formulario/Formulario.module.css';
import Titulo from '../Titulo/Titulo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';

export default function FormProponentes() {
  const {
    status,
    setStatus,
    listaProponentes,
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
    setRenda,
    setSomaRendas,
    setListaRendas,
    setListaProponentes,
  } = useContext(CadastroContext);

  const todosProponentes = [...listaProponentes];

  function proponenteInfo(proponente) {
    setNome(proponente.nome);
    setCPF(proponente.cpf);
    setEstadoCivil(proponente.estadoCivil);
    setPis(proponente.pis);
    setCelular(proponente.celular);
    setEmail(proponente.email);
    setCEP(proponente.cep);
    setCEPLogradouro(proponente.cepLogradouro);
    setCEPBairro(proponente.cepBairro);
    setCEPLocalidade(proponente.cepLocalidade);
    setCEPUF(proponente.cepUF);
    setCEPNumero(proponente.cepNumero);
    setCEPComplemento(proponente.cepComplemento);
    setSomaRendas(proponente.somaRendas);
    setListaRendas(proponente.listaRendas);

    setStatus(1);

    const listaParticipantes = [...listaProponentes];
    listaParticipantes.filter;
    (participante) => {
      participante != propoente;
    };

    setListaProponentes((listaAntiga) =>
      listaAntiga.filter((item) => item !== proponente),
    );
  }

  return (
    <section
      className={styles.categoriaContainer}
      style={{ display: status === 4 ? 'flex' : 'none' }}
    >
      <Titulo texto="Proponentes" />

      <section className={styles.preencherContainer}>
        <Button
          variant="outlined"
          onClick={() => {
            setStatus(1);
          }}
          style={{
            alignSelf: 'center',
            width: '50%',
            minWidth: '250px',
            height: '50px',
            backgroundColor: '#1f467e',
            color: 'white',
            display: 'flex',
            gap: '10px',
          }}
        >
          Adicionar Proponente
          <AddCircleIcon />
        </Button>

        {todosProponentes.map((Proponente, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => {
              proponenteInfo(Proponente);
            }}
            style={{
              alignSelf: 'center',
              width: '50%',
              minWidth: '250px',
              height: '50px',
              backgroundColor: '#1f467e',
              color: 'white',
              display: 'flex',
              gap: '10px',
            }}
          >
            {Proponente.nome}
          </Button>
        ))}
      </section>
    </section>
  );
}
