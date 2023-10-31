import { useContext } from 'react';
import styles from './PaginaResultado.module.css';
import { CadastroContext } from '../../context/cadastroInfo';
import BotoesEtapas from '../BotoesEtapas/BotoesEtapas';

export default function PaginaResultado() {
  const {
    listaProponentes,
    status,
    compraEVenda,
    financiamento,
    enquadramento,
    fgts,
    observacao,
  } = useContext(CadastroContext);

  const valorNumerico = (referencia) =>
    Number(
      String(referencia)
        .replace(/[^\d,]/g, '')
        .replace(',', '.'),
    );

  const todosProponentes = [...listaProponentes];

  return (
    <>
      <section
        class={styles.paginaResultado}
        style={{ display: status === 6 ? 'flex' : 'none' }}
      >
        <div class={styles.conteudo}>
          <h5 className={styles.titulo}>Ficha cadastro</h5>

          {todosProponentes.map((proponente, index) => (
            <>
              <section className={styles.container}>
                <h6 class={styles.dadosTitulo}>
                  Proponente {index + 1 === 1 ? 'principal' : index + 1}
                </h6>
                <section className={styles.dadosContainer}>
                  <div>
                    <p className={styles.dadosInfo}>
                      Nome: <span>{proponente.nome}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      Estado civil: <span>{proponente.estadoCivil}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      Email: <span>{proponente.email}</span>
                    </p>
                  </div>
                  <div>
                    <p className={styles.dadosInfo}>
                      CPF: <span>{proponente.cpf}</span>
                    </p>

                    <p className={styles.dadosInfo}>
                      PIS: <span>{proponente.pis}</span>
                    </p>

                    <p className={styles.dadosInfo}>
                      Celular <span>{proponente.celular}</span>
                    </p>
                  </div>
                </section>
              </section>

              <section className={styles.container}>
                <h6 class={styles.dadosTitulo}>Endereço</h6>
                <section className={styles.dadosContainer}>
                  <div>
                    <p className={styles.dadosInfo}>
                      CEP: <span>{proponente.cep}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      Endereço:
                      <span>
                        {proponente.cepLogradouro}, {proponente.cepNumero}
                        {proponente.cepComplemento !== ''
                          ? `, ${proponente.cepComplemento}`
                          : ''}
                        , {proponente.cepBairro}, {proponente.cepLocalidade} /
                        {proponente.cepUF}
                      </span>
                    </p>
                  </div>
                </section>
              </section>

              <section className={styles.container}>
                <h6 class={styles.dadosTitulo}>Renda</h6>
                <section className={styles.dadosContainer}>
                  <div>
                    {/*  <div class={styles.somaRendas}>
                      <p className={styles.dadosInfo}>
                        Somatório das rendas:{' '}
                        <span>{proponente.somaRendas}</span>
                      </p>
                      <p className={styles.dadosInfo}>
                        Capacidade de pagamento:
                        <span>
                          {Number(
                            valorNumerico(proponente.somaRendas) * 0.3,
                          ).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                      </p>
                    </div> */}

                    <ul className={styles.listaRendas}>
                      {proponente.listaRendas.map((renda) => (
                        <li key={renda.cnpj} className={styles.itemRenda}>
                          <p className={styles.dadosInfo}>
                            Tipo: <span>{renda.tipo}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            CNPJ: <span>{renda.cnpj}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            Admissão: <span>{renda.admissao}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            Renda: <span>{renda.renda}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </section>
            </>
          ))}

          <section className={styles.container}>
            <h6 className={styles.dadosTitulo}>Proposta</h6>
            <section className={styles.dadosContainer}>
              <div>
                <p className={styles.dadosInfo}>
                  Compra e venda: <span>{compraEVenda}</span>
                </p>
                <p className={styles.dadosInfo}>
                  FGTS: <span>{fgts === '' ? 'não se aplica' : fgts}</span>
                </p>
              </div>
              <div>
                <p className={styles.dadosInfo}>
                  Financiamento: <span>{financiamento}</span>
                </p>
                <p className={styles.dadosInfo}>
                  Enquadramento: <span>{enquadramento}</span>
                </p>
              </div>
            </section>
          </section>

          <section className={styles.container}>
            <h6 class={styles.dadosTitulo}>Observação</h6>
            <section className={styles.dadosContainer}>
              <div>
                <p className={styles.dadosInfo}>
                  {observacao === '' ? 'Nenhuma' : observacao}
                </p>
              </div>
            </section>
          </section>
        </div>
        <BotoesEtapas />
      </section>
    </>
  );
}
