import styles from './Formulario.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputForm, { InputLeitura } from '../InputForm/InputForm';
import { useState } from 'react';
import Titulo from '../Titulo/Titulo';
import consultaCEP from '../../functions/consultaCEP';

/* 005ca9 */

function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');

  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cepConsultado, setCEPConsultado] = useState('');

  const procuraCEP = async (e) => {
    e.preventDefault();
    const resultadoConsulta = await consultaCEP(cep);

    setCEPConsultado(resultadoConsulta);
  };

  return (
    <form onSubmit={procuraCEP}>
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
        <Titulo texto="CEP" />
        <InputForm
          id="input-cep"
          value={cep}
          label="CEP"
          onChange={(event) => {
            setCEP(event.target.value);
          }}
        />

        <div>
          <InputLeitura
            id="input-endereco"
            label="Endereço"
            value={cepConsultado.logradouro}
          />
        </div>

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </section>
    </form>
  );
}

export default Formulario;
