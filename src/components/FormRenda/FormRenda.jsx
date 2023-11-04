import { Alert, Button, MenuItem, TextField } from '@mui/material';
import styles from '../Formulario/Formulario.module.css';
import InputForm from '../InputForm/InputForm';
import SelectForm from '../SelectForm/SelectForm';
import Titulo from '../Titulo/Titulo';
import { useContext, useEffect, useState } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import { NumericFormat } from 'react-number-format';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLeitura from '../InputLeitura/InputLeitura';
import consultaCNPJ from '../../functions/ConsultaCNPJ';
import FormatarData from '../../functions/FormatarData';
import DeleteIcon from '@mui/icons-material/Delete';
import SubTitulo from '../SubTitulo/SubTitulo';

export default function FormRenda() {
  const {
    empresaAtual,
    renda,
    listaRendas,
    status,
    setEmpresaAtual,
    setRenda,
    setListaRendas,
    somaRendas,
    setSomaRendas,
  } = useContext(CadastroContext);

  useEffect(() => {
    const todasRendas = [...listaRendas];

    let totalRendas = 0;

    todasRendas.forEach((renda) => {
      if (renda.renda) {
        const valorRenda = Number(
          renda.renda.replace(/[^\d,]/g, '').replace(',', '.'),
        );
        totalRendas += valorRenda;
      }
    });

    const totalRendasBRL = totalRendas.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    setSomaRendas(totalRendasBRL);
  }, [listaRendas]);

  const inputRendaProps = {
    id: 'filled-multiline-flexible',
    label: 'Renda',
    variant: 'outlined',
    InputProps: {
      inputProps: {
        style: {
          backgroundColor: 'white',
          flex: '1',
        },
      },
    },
  };

  const materialUITotalRendaProps = {
    id: 'filled-multiline-flexible',
    label: 'Renda',
    variant: 'outlined',
  };

  function obterMesEAnoAtual() {
    var dataAtual = new Date();
    var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    var ano = dataAtual.getFullYear().toString();

    return mes + '/' + ano;
  }

  function adicionaRenda(event) {
    const admissaoInvertida = FormatarData(empresaAtual.data_inicio_atividade);

    const mesAtual = obterMesEAnoAtual();

    const rendaAtual = {
      empresa: empresaAtual.razao_social,
      cnpj: renda.cnpj,
      admissao:
        renda.tipo === 'Imposto de renda' ? admissaoInvertida : renda.admissao,
      tipo: renda.tipo,
      cargo: renda.cargo,
      renda: renda.renda,
      referencia:
        renda.tipo === 'Imposto de renda' ? mesAtual : renda.referencia,
    };

    const listaAtualizada = [...listaRendas, rendaAtual];

    setListaRendas(listaAtualizada);
    console.log(listaRendas);

    const rendaVazia = {
      empresa: '',
      cnpj: '',
      admissao: '',
      tipo: renda.tipo,
      renda: '',
      cargo: '',
      referencia: '',
    };

    setRenda(rendaVazia);
    setEmpresaAtual('');
  }

  async function consultaEmpresa(cnpj) {
    const empresa = await consultaCNPJ(cnpj);
    setEmpresaAtual(empresa);
    console.log(empresa);
  }

  const valorNumerico = Number(
    String(somaRendas)
      .replace(/[^\d,]/g, '')
      .replace(',', '.'),
  );
  return (
    <>
      <section
        className={styles.categoriaContainer}
        style={{ display: status === 3 ? 'flex' : 'none' }}
      >
        <Titulo texto="Renda" />

        <section className={styles.preencherContainer}>
          <div>
            <InputForm
              id="input-cnpj"
              value={renda.cnpj}
              label="CNPJ"
              maxLength="18"
              onChange={(event) => {
                const atualizaRenda = { ...renda };
                atualizaRenda.cnpj = event.target.value.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                  '$1.$2.$3/$4-$5',
                );
                setRenda(atualizaRenda);
              }}
            />

            <Button
              variant="outlined"
              onClick={() => {
                const cnpjNumerico = renda.cnpj.replace(/[^\d]/g, '');

                if (cnpjNumerico.length !== 14) {
                  alert('CNPJ não atende a quantidade minima de caracteres');
                } else {
                  consultaEmpresa(renda.cnpj);
                }
              }}
              style={{
                alignSelf: 'center',
                width: '96%',
                height: '50px',
                backgroundColor: '#1f467e',
                color: 'white',
                display: 'flex',
                gap: '10px',
              }}
            >
              Consultar
            </Button>
          </div>

          <div>
            <InputLeitura
              id={`nomeCNPJ`}
              label="Nome da empresa"
              value={empresaAtual.razao_social || ''}
            />
            <SelectForm
              id="input-tipoRenda"
              label="Tipo"
              value={renda.tipo}
              onChange={(event) => {
                const atualizaRenda = { ...renda };
                atualizaRenda.tipo = event.target.value;
                setRenda(atualizaRenda);
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Imposto de renda">Imposto de renda</MenuItem>
              <MenuItem value="CLT">CLT</MenuItem>
              <MenuItem value="Pró labore">Pró labore</MenuItem>
              <MenuItem value="Informal">Informal</MenuItem>
            </SelectForm>
          </div>

          {renda.tipo != 'Imposto de renda' ? (
            <div>
              <InputForm
                id="input-admissao"
                value={renda.admissao}
                label="Admissão"
                onChange={(event) => {
                  const atualizaRenda = { ...renda };
                  atualizaRenda.admissao = event.target.value.replace(
                    /(\d{2})(\d{2})(\d{4})/,
                    '$1/$2/$3',
                  );
                  setRenda(atualizaRenda);
                }}
                maxLength="10"
              />
              <InputForm
                id="input-admissao"
                value={renda.referencia}
                label="Refêrencia"
                onChange={(event) => {
                  const atualizaRenda = { ...renda };
                  atualizaRenda.referencia = event.target.value.replace(
                    /(\d{2})(\d{4})/,
                    '$1/$2',
                  );
                  setRenda(atualizaRenda);
                }}
                maxLength="7"
              />
            </div>
          ) : (
            ''
          )}

          <div>
            <InputForm
              id="input-cargo"
              value={renda.cargo}
              label="Cargo"
              onChange={(event) => {
                const atualizaRenda = { ...renda };
                atualizaRenda.cargo = event.target.value;
                setRenda(atualizaRenda);
              }}
            />
            <NumericFormat
              value={renda.renda}
              displayType={'input'}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={'R$ '}
              customInput={TextField}
              {...inputRendaProps}
              onValueChange={(values) => {
                const { formattedValue } = values;
                setRenda((prevRenda) => ({
                  ...prevRenda,
                  renda: formattedValue,
                }));
              }}
            />
          </div>

          <Button
            variant="outlined"
            onClick={adicionaRenda}
            style={{
              alignSelf: 'center',
              width: '50%',
              height: '50px',
              backgroundColor: '#1f467e',
              color: 'white',
              display: 'flex',
              gap: '10px',
            }}
          >
            Adicionar <AddCircleIcon />
          </Button>
        </section>
      </section>
      <section
        className={styles.categoriaContainer}
        style={{ display: status === 3 ? 'flex' : 'none' }}
      >
        <Titulo texto="Histórico" />

        <section className={styles.preencherContainer}>
          <div>
            <InputLeitura
              id={`totalRendas`}
              label="Renda total"
              value={somaRendas}
            />

            <InputLeitura
              id={`capacidadePagamento`}
              label="Capacidade de pagamento (30%)"
              value={Number(valorNumerico * 0.3).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            />
          </div>
          <ul
            className={styles.listaRendas}
            style={{ display: status === 3 ? 'flex' : 'none' }}
          >
            {status === 3
              ? listaRendas.map((renda, index) => (
                  <li key={index} className={styles.rendaContainer}>
                    <h1 className={styles.listaRendasTitulo}>
                      {renda.tipo ? renda.tipo : 'Tipo não definido'}
                      <Button
                        variant="outlined"
                        style={{
                          minWidth: 'auto',
                          display:
                            status === 1 || status === 4 ? 'none' : 'flex',
                          backgroundColor: 'transparent',
                          color: 'white',
                          cursor: 'pointer',
                          border: 'none',
                        }}
                        onClick={() => {
                          confirm(
                            `Deseja apagar a renda atual ? ${renda.renda}`,
                          )
                            ? setListaRendas((listaAnterior) =>
                                listaAnterior.filter(
                                  (itens) => itens !== renda,
                                ),
                              )
                            : '';
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </h1>
                    {renda.tipo != 'Imposto de renda' ? (
                      <div>
                        <Alert variant="filled" severity="warning">
                          Apresentar documento
                        </Alert>
                      </div>
                    ) : (
                      ''
                    )}
                    <InputLeitura
                      id={`nomeDaEmpresa${renda.cnpj}`}
                      label="Razão social"
                      value={renda.empresa}
                    />
                    <div>
                      <InputLeitura
                        id={`cnpjDaEmpresa${renda.cnpj}`}
                        label="CNPJ"
                        value={renda.cnpj}
                      />

                      <InputLeitura
                        key={`referenciaDaEmpresa${renda.cnpj}`}
                        label="Refêrencia"
                        value={renda.referencia}
                      />
                    </div>

                    <div>
                      <InputLeitura
                        key={`admissaoDaEmpresa${renda.cnpj}`}
                        label="Admissão"
                        value={renda.admissao}
                      />
                      <InputLeitura
                        key={`cargoDaEmpresa${renda.cnpj}`}
                        label="Cargo"
                        value={renda.cargo}
                      />
                    </div>

                    <InputLeitura
                      key={`rendaDaEmpresa${renda.cnpj}`}
                      label="Renda"
                      value={renda.renda}
                    />
                  </li>
                ))
              : ''}
          </ul>
        </section>
      </section>
    </>
  );
}
