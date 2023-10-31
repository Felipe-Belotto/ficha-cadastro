import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import styles from '../Formulario/Formulario.module.css';
import Titulo from '../Titulo/Titulo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';

export default function FormProponentes() {
  const { status, setStatus, listaProponentes } = useContext(CadastroContext);

  const todosProponentes = [...listaProponentes];

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
            onClick={console.log(Proponente)}
            style={{
              alignSelf: 'center',
              width: '50%',
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
