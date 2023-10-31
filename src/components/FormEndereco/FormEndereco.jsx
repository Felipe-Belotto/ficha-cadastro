import { Button } from '@mui/material';
import styles from '../Formulario/Formulario.module.css';
import InputForm from '../InputForm/InputForm';
import Titulo from '../Titulo/Titulo';
import { useContext } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import InputLeitura from '../InputLeitura/InputLeitura';
import consultaCEP from '../../functions/consultaCEP.jsx';

export default function FormEndereco() {
  const {
    cep,
    cepLogradouro,
    cepBairro,
    cepLocalidade,
    cepUF,
    cepNumero,
    cepComplemento,
    status,
    setCEP,
    setCEPLogradouro,
    setCEPBairro,
    setCEPLocalidade,
    setCEPUF,
    setCEPNumero,
    setCEPComplemento,
  } = useContext(CadastroContext);

  async function procuraCEP(e) {
    e.preventDefault();
    const resultadoConsulta = await consultaCEP(cep);

    setCEPUF(resultadoConsulta.uf);
    setCEPLocalidade(resultadoConsulta.localidade);
    setCEPBairro(resultadoConsulta.bairro);
    setCEPLogradouro(resultadoConsulta.logradouro);
  }

  function localizarCEP() {
    const url =
      'https://buscacepinter.correios.com.br/app/endereco/index.php?t';
    window.open(url, '_blank');
  }
  return (
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
            maxLength="9"
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
          <InputLeitura id="input-cepBairro" label="Bairro" value={cepBairro} />
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
              setCEPNumero(event.target.value);
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
  );
}
