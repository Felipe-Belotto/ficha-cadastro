import { useContext, useEffect, useState } from 'react';
import styles from './PaginaResultado.module.css';
import { CadastroContext } from '../../context/cadastroInfo';
import BotoesEtapas from '../BotoesEtapas/BotoesEtapas';
import ConverterBRL from '../../functions/converterBRL';

export default function PaginaResultado() {
  const {
    listaProponentes,
    status,
    tipoImovel,
    condicaoImovel,
    compraEVenda,
    financiamento,
    enquadramento,
    fgts,
    observacao,
  } = useContext(CadastroContext);

  const [somatorioDasRendas, setSomatorioDasRendas] = useState(0);

  const valorNumerico = (referencia) =>
    Number(
      String(referencia)
        .replace(/[^\d,]/g, '')
        .replace(',', '.'),
    );

  const todosProponentes = [...listaProponentes];

  const listaTodasRendas = [];
  let somatorioRendas = 0;

  todosProponentes.forEach((proponente) => {
    const rendasDoProponente = proponente.listaRendas.map((renda) =>
      valorNumerico(renda.renda),
    );
    listaTodasRendas.push(...rendasDoProponente);
  });

  useEffect(() => {
    let somatorioRendas = 0;

    listaTodasRendas.forEach((renda) => {
      somatorioRendas = somatorioRendas + renda;
    });

    setSomatorioDasRendas(somatorioRendas);
  }, [listaTodasRendas]);

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
                      Endereço:{' '}
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
                    <div class={styles.somaRendas}>
                      <p className={styles.dadosInfo}>
                        Renda total: <span>{proponente.somaRendas}</span>
                      </p>
                    </div>
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
            <div>
              <p className={styles.dadosInfo}>
                Somatório de todas as rendas:{' '}
                <span>{ConverterBRL(ConverterBRL(somatorioDasRendas))}</span>
              </p>
              <p className={styles.dadosInfo}>
                Valor da prestação máxima:{' '}
                <span>{ConverterBRL(somatorioDasRendas * 0.3)}</span>
              </p>
            </div>
            <div>
              <p className={styles.dadosInfo}>
                Imóvel: <span>{tipoImovel}</span>
              </p>
              <p className={styles.dadosInfo}>
                Condição: <span>{condicaoImovel}</span>
              </p>
            </div>
            <section className={styles.dadosContainer}>
              <div>
                <p className={styles.dadosInfo}>
                  Compra e venda: <span>{compraEVenda}</span>
                </p>
                <p className={styles.dadosInfo}>
                  Financiamento: <span>{financiamento}</span>
                </p>
              </div>
              <div>
                <p className={styles.dadosInfo}>
                  Enquadramento: <span>{enquadramento}</span>
                </p>
                <p className={styles.dadosInfo}>
                  FGTS: <span>{fgts === '' ? 'não se aplica' : fgts}</span>
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
