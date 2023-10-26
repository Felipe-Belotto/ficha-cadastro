import React, { useEffect, useState } from 'react';
import styles from './Formulario.module.css';
import Titulo from '../Titulo/Titulo';
import InputForm from '../InputForm/InputForm';
import InputLeitura from '../InputLeitura/InputLeitura';
import { Button } from '@mui/material';
import consultaCEP from '../../functions/consultaCEP';

/* 005ca9 */

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cepConsultado, setCEPConsultado] = useState([]);
  const [cepLogradouro, setCEPLogradouro] = useState('');
  const [cepBairro, setCEPBairro] = useState('');
  const [cepLocalidade, setCEPLocalidade] = useState('');
  const [cepUF, setCEPUF] = useState('');
  const [cepNumero, setCENumero] = useState('');

  async function procuraCEP(e) {
    e.preventDefault();
    const resultadoConsulta = await consultaCEP(cep);

    setCEPConsultado(resultadoConsulta);
    setCEPUF(resultadoConsulta.uf);
    setCEPLocalidade(resultadoConsulta.localidade);
    setCEPBairro(resultadoConsulta.bairro);
    setCEPLogradouro(resultadoConsulta.logradouro);
  }

  return (
    <form>
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
        <div>
          <InputForm
            id="input-cep"
            value={cep}
            label="CEP"
            onChange={(event) => {
              setCEP(event.target.value.replace(/(\d{5})(\d{3})/, '$1-$2'));
              procuraCEP(event);
            }}
          />

          <Button
            variant="outlined"
            className={styles.botaoProcurar}
            onClick={procuraCEP}
          >
            Consultar
          </Button>
        </div>
        <InputLeitura id="input-cepUF" label="UF" value={cepUF} />
        <div>
          <InputLeitura
            id="input-cepLocalidade"
            label="Local"
            value={cepLocalidade}
          />
          <InputLeitura id="input-cepBairro" label="Bairro" value={cepBairro} />
        </div>

        <div>
          <InputLeitura
            id="input-cepEndereco"
            label="Endereço"
            value={cepLogradouro}
          />
          <InputForm
            id="input-cepNumero"
            value={cepNumero}
            label="Número"
            onChange={(event) => {
              setCENumero(event.target.value);
            }}
          />
        </div>

        <Button type="submit" variant="contained" /* endIcon={} */>
          Enviar
        </Button>
      </section>
    </form>
  );
}
