import { MenuItem } from '@mui/material';
import styles from '../Formulario/Formulario.module.css';
import InputForm from '../InputForm/InputForm';
import SelectForm from '../SelectForm/SelectForm';
import Titulo from '../Titulo/Titulo';
import { useContext } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';

export default function FormPessoal() {
  const {
    nome,
    cpf,
    estadoCivil,
    nascimento,
    pis,
    celular,
    email,
    status,
    setNome,
    setCPF,
    setEstadoCivil,
    setNascimento,
    setPis,
    setCelular,
    setEmail,
  } = useContext(CadastroContext);
  return (
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
            maxLength="14"
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
            label="Estado civil"
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
            id="input-nascimento"
            value={nascimento}
            label="Nascimento"
            maxLength="10"
            onChange={(event) => {
              setNascimento(
                event.target.value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'),
              );
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
            maxLength="15"
            onChange={(event) => {
              setCelular(
                event.target.value
                  .replace(/\D/g, '')
                  .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3'),
              );
            }}
          />
        </div>

        <div>
          <InputForm
            id="input-pis"
            value={pis}
            label="PIS (caso tenha FGTS)"
            onChange={(event) => {
              setPis(event.target.value);
            }}
          />
        </div>
      </section>
    </section>
  );
}
