import React, { useContext, useEffect, useState } from 'react';
import styles from './Formulario.module.css';
import Titulo from '../Titulo/Titulo';
import InputForm from '../InputForm/InputForm';
import InputLeitura from '../InputLeitura/InputLeitura';
import { Button, MenuItem } from '@mui/material';
import consultaCEP from '../../functions/consultaCEP';
import SelectForm from '../SelectForm/SelectForm';
import SearchIcon from '@mui/icons-material/Search';

/* 005ca9 */

export default function Formulario() {
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
  const [renda, setRenda] = useState('');
  const [status, setStatus] = useState(1);

  async function procuraCEP(e) {
    e.preventDefault();
    const resultadoConsulta = await consultaCEP(cep);

    setCEPUF(resultadoConsulta.uf);
    setCEPLocalidade(resultadoConsulta.localidade);
    setCEPBairro(resultadoConsulta.bairro);
    setCEPLogradouro(resultadoConsulta.logradouro);
  }

  function voltar() {
    if (status != 1 && status >= 1 && status <= 5) {
      setStatus(status - 1);
    }
  }

  function avancar() {
    if (status >= 1 && status <= 5) {
      setStatus(status + 1);
    }
  }

  function localizarCEP() {
    const url =
      'https://buscacepinter.correios.com.br/app/endereco/index.php?t';
    window.open(url, '_blank');
  }

  return (
    <form>
      <section className={styles.container}>
        <section
          className={styles.categoriaContainer}
          style={{ display: status === 1 ? 'flex' : 'none' }}
        >
          <Titulo texto="Dados Pessoais" />

          <section className={styles.preencherContainer}>
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

            <div>
              <SelectForm
                id="input-estadoCivil"
                value={estadoCivil}
                onChange={(event) => {
                  setEstadoCivil(event.target.value);
                }}
              >
                <MenuItem value="Solteiro">Solteiro</MenuItem>
                <MenuItem value="Divorciado">Divorciado</MenuItem>
                <MenuItem value="Separado judicialmente">
                  Separado judicialmente
                </MenuItem>
                <MenuItem value="Comunhão separação total de bens">
                  Comunhão separação total de bens
                </MenuItem>
                <MenuItem value="Comunhão parcial de bens">
                  Comunhão parcial de bens
                </MenuItem>
                <MenuItem value="Comunhão universal de bens">
                  Comunhão universal de bens
                </MenuItem>
              </SelectForm>

              <InputForm
                id="input-pis"
                value={pis}
                label="PIS (caso tenha FGTS)"
                onChange={(event) => {
                  setPis(event.target.value);
                }}
              />
            </div>

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
                label="Celular"
                onChange={(event) => {
                  setCelular(
                    event.target.value
                      .replace(/\D/g, '')
                      .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3'),
                  );
                }}
              />
            </div>
          </section>
        </section>

        <section
          className={styles.categoriaContainer}
          style={{ display: status === 2 ? 'flex' : 'none' }}
        >
          <Titulo texto="Endereço" />

          <section className={styles.preencherContainer}>
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
                style={{
                  width: '50%',
                  backgroundColor: '#1f467e',
                  color: 'white',
                }}
              >
                Consultar
              </Button>
              <Button
                variant="outlined"
                className={styles.botaoProcurar}
                onClick={localizarCEP}
                style={{
                  backgroundColor: '#1f467e',
                  color: 'white',
                }}
              >
                Localizar CEP
              </Button>
            </div>

            <div>
              <InputLeitura
                id="input-cepLocalidade"
                label="Local"
                value={cepLocalidade}
              />
              <InputLeitura
                id="input-cepBairro"
                label="Bairro"
                value={cepBairro}
              />
              <InputLeitura id="input-cepUF" label="UF" value={cepUF} />
            </div>
            <div>
              <InputLeitura
                id="input-cepEndereco"
                label="Endereço"
                value={cepLogradouro}
              />
            </div>
            <div>
              <InputForm
                id="input-cepNumero"
                value={cepNumero}
                label="Número"
                onChange={(event) => {
                  setCENumero(event.target.value);
                }}
              />
              <InputForm
                id="input-cepComplemento"
                value={cepComplemento}
                label="Complemento"
                onChange={(event) => {
                  setCEPComplemento(event.target.value);
                }}
              />
            </div>
          </section>
        </section>

        <section className={styles.containerBotoes}>
          <Button
            variant="outlined"
            style={{
              display: status === 1 ? 'none' : 'flex',
              backgroundColor: '#eb0b1b',
              color: 'white',
            }}
            onClick={voltar}
          >
            Voltar
          </Button>

          <Button
            variant="outlined"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#1f467e',
              color: 'white',
            }}
            onClick={avancar}
          >
            Avançar
          </Button>
        </section>
      </section>
    </form>
  );
}
