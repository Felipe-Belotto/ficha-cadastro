import { useContext, useEffect, useState } from 'react';
import styles from './PaginaResultado.module.css';
import { CadastroContext } from '../../context/cadastroInfo';
import BotoesEtapas from '../BotoesEtapas/BotoesEtapas';
import ConverterBRL from '../../functions/ConverterBRL.jsx';
import SubTitulo from '../SubTitulo/SubTitulo.jsx';

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
    prazoMaximo,
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
        <section class={styles.conteudo}>
          <h5 className={styles.titulo}>Ficha cadastro</h5>
          <section className={styles.conteudoInformacoes}>
            {todosProponentes.map((proponente, index) => (
              <>
                <h6 class={styles.dadosTitulo}>
                  Proponente {index + 1 === 1 ? 'principal' : index + 1}
                </h6>
                <section key={index} className={styles.container}>
                  <div>
                    <SubTitulo texto="Dados cadastrais" />
                    <p className={styles.dadosInfo}>
                      Nome: <span>{proponente.nome}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      CPF: <span>{proponente.cpf}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      Estado civil: <span>{proponente.estadoCivil}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      PIS: <span>{proponente.pis}</span>
                    </p>
                  </div>
                  <div>
                    <SubTitulo texto="Contatos" />
                    <p className={styles.dadosInfo}>
                      Celular <span>{proponente.celular}</span>
                    </p>
                    <p className={styles.dadosInfo}>
                      Email: <span>{proponente.email}</span>
                    </p>
                  </div>
                </section>

                <section className={styles.container}>
                  <div>
                    <SubTitulo texto="Endereço" />
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

                <section className={styles.container}>
                  <div>
                    <SubTitulo texto="Renda" />
                    <div class={styles.somaRendas}>
                      <p className={styles.dadosInfo}>
                        Renda total: <span>{proponente.somaRendas}</span>
                      </p>
                    </div>
                    <ul className={styles.listaRendas}>
                      {proponente.listaRendas.map((renda) => (
                        <li key={renda.cnpj} className={styles.itemRenda}>
                          <p className={styles.dadosInfo}>
                            CNPJ: <span>{renda.cnpj}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            Tipo: <span>{renda.tipo}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            Cargo: <span>{renda.cargo}</span>
                          </p>
                          <p className={styles.dadosInfo}>
                            Refêrencia: <span>{renda.referencia}</span>
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
              </>
            ))}

            <h6 className={styles.dadosTitulo}>Proposta</h6>
            <section className={styles.container}>
              <div className={styles.somaRendas}>
                <div>
                  <SubTitulo texto="Capacidade de pagamento" />
                  <p className={styles.dadosInfo}>
                    Somatório de todas as rendas:{' '}
                    <span>
                      {ConverterBRL(ConverterBRL(somatorioDasRendas))}
                    </span>
                  </p>
                  <p className={styles.dadosInfo}>
                    Valor da prestação máxima:{' '}
                    <span>{ConverterBRL(somatorioDasRendas * 0.3)}</span>
                  </p>
                  <p className={styles.dadosInfo}>
                    Prazo Máximo:{' '}
                    <span>
                      {isFinite(prazoMaximo)
                        ? prazoMaximo + ' meses'
                        : 'Data de nascimento não definida'}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <SubTitulo texto="Valores" />
                <p className={styles.dadosInfo}>
                  Compra e venda: <span>{compraEVenda}</span>
                </p>
                <p className={styles.dadosInfo}>
                  Financiamento: <span>{financiamento}</span>
                </p>
                <p className={styles.dadosInfo}>
                  FGTS: <span>{fgts === '' ? 'não se aplica' : fgts}</span>
                </p>
              </div>
              <div>
                <SubTitulo texto="Imóvel" />
                <p className={styles.dadosInfo}>
                  Imóvel: <span>{tipoImovel}</span>
                </p>
                <p className={styles.dadosInfo}>
                  Condição: <span>{condicaoImovel}</span>
                </p>
              </div>
            </section>

            <SubTitulo texto="Observação" />
            <section className={styles.container}>
              <div>
                <p className={styles.dadosInfo}>
                  {observacao === '' ? 'Nenhuma' : observacao}
                </p>
              </div>
            </section>
          </section>
        </section>
        <BotoesEtapas />
      </section>
    </>
  );
}
