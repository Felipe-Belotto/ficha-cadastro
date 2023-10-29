import { useContext } from 'react';
import styles from './PaginaResultado.module.css';
import { CadastroContext } from '../../context/cadastroInfo';

export default function PaginaResultado() {
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
    status,
    compraEVenda,
    financiamento,
    enquadramento,
    fgts,
    observacao,
  } = useContext(CadastroContext);
  return (
    <section
      class={styles.paginaResultado}
      style={{ display: status === 5 ? 'flex' : 'none' }}
    >
      <div class={styles.conteudo}>
        <h5 className={styles.titulo}>Ficha cadastro</h5>

        <section className={styles.container}>
          <h6 class={styles.dadosTitulo}>Pessoal</h6>
          <section className={styles.dadosContainer}>
            <div>
              <p className={styles.dadosInfo}>
                Nome: <span>{nome}</span>
              </p>
              <p className={styles.dadosInfo}>
                Estado civil: <span>{estadoCivil}</span>
              </p>
              <p className={styles.dadosInfo}>
                Email: <span>{email}</span>
              </p>
            </div>
            <div>
              <p className={styles.dadosInfo}>
                CPF: <span>{cpf}</span>
              </p>

              <p className={styles.dadosInfo}>
                PIS: <span>{pis}</span>
              </p>

              <p className={styles.dadosInfo}>
                Celular <span>{celular}</span>
              </p>
            </div>
          </section>
        </section>

        <section className={styles.container}>
          <h6 class={styles.dadosTitulo}>Endereço</h6>
          <section className={styles.dadosContainer}>
            <div>
              <p className={styles.dadosInfo}>
                CEP: <span>{cep}</span>
              </p>
              <p className={styles.dadosInfo}>
                Endereço:{' '}
                <span>
                  {cepLogradouro}, {cepNumero}
                  {cepComplemento !== '' ? `, ${cepComplemento}` : ''},{' '}
                  {cepBairro}, {cepLocalidade} /{cepUF}
                </span>
              </p>
            </div>
            <div></div>
          </section>
        </section>
      </div>
    </section>
  );
}
