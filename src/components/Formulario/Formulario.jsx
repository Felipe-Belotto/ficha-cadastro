import styles from './Formulario.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputForm from '../InputForm/InputForm';
import { useState } from 'react';
import Titulo from '../Titulo/Titulo';

/* 005ca9 */

function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={() => {
        criarPasta(nome, cpf);
      }}
    >
      <section className={styles.container}>
        <Titulo texto="Dados Pessoais" />
        <div>
          <InputForm
            id="input-nome"
            value={nome}
            label="Nome"
            onChange={(event) => {
              setNome(event.target.value);
            }}
          />

          <InputForm
            id="input-CPF"
            value={cpf}
            label="CPF"
            onChange={(event) => {
              setCPF(
                event.target.value
                  .replace(/\D/g, '')
                  .replace(/(\d{3})(\d)/, '$1.$2')
                  .replace(/(\d{3})(\d)/, '$1.$2')
                  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                  .replace(/(-\d{2})\d+?$/, '$1'),
              );
            }}
          />
        </div>
        <Titulo texto="Contatos" />
        <div>
          <InputForm
            id="input-email"
            value={email}
            label="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <InputForm
            id="input-celular"
            value={celular}
            label="Cel"
            onChange={(event) => {
              setCelular(
                event.target.value
                  .replace(/\D/g, '')
                  .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3'),
              );
            }}
          />
        </div>

        <Button variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </section>
    </form>
  );
}

export default Formulario;
