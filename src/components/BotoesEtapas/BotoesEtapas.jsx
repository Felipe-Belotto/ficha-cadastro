import { useContext } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import styles from '../Formulario/Formulario.module.css';
import { Button } from '@mui/material';

export default function BotoesEtapas() {
  const { status, setStatus } = useContext(CadastroContext);

  function voltar() {
    if (status != 1 && status >= 1) {
      setStatus(status - 1);
    }
  }

  function avancar() {
    if (status >= 1 && status < 5) {
      setStatus(status + 1);
    }
  }
  return (
    <section className={styles.containerBotoes}>
      <Button
        variant="outlined"
        style={{
          minWidth: '150px',
          display: status === 1 ? 'none' : 'flex',
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
          display: 'flex',
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
