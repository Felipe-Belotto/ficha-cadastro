import { MenuItem, TextField } from '@mui/material';
import styles from '../Formulario/Formulario.module.css';
import InputForm from '../InputForm/InputForm';
import SelectForm from '../SelectForm/SelectForm';
import Titulo from '../Titulo/Titulo';
import { useContext, useEffect } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import { NumericFormat } from 'react-number-format';
import InputLeitura from '../InputLeitura/InputLeitura';
import MultilineForm from '../multilineForm/multilineForm';

export default function FormProposta() {
  const {
    tipoImovel,
    condicaoImovel,
    compraEVenda,
    financiamento,
    enquadramento,
    fgts,
    observacao,
    prazoMaximo,
    status,
    listaProponentes,
    setCondicaoImovel,
    setTipoImovel,
    setCompraEVenda,
    setFinanciamento,
    setEnquadramento,
    setFGTS,
    setObservacao,
    setPrazoMaximo,
  } = useContext(CadastroContext);

  const inputCvProps = {
    id: 'input-compraEVenda',
    label: 'Compra e venda',
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

  const inputFProps = {
    id: 'input-financiamento',
    label: 'Financiamento',
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

  const inputFgtsProps = {
    id: 'input-fgts',
    label: 'FGTS',
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

  function encontrarMenorPrazo(listaProponentes) {
    return Math.min(...listaProponentes.map((proponente) => proponente.prazo));
  }

  useEffect(() => {
    const prazoMenor = encontrarMenorPrazo(listaProponentes);
    setPrazoMaximo(prazoMenor);
  }, [listaProponentes, setPrazoMaximo]);

  return (
    <section
      className={styles.categoriaContainer}
      style={{ display: status === 5 ? 'flex' : 'none' }}
    >
      <Titulo texto="Proposta" />

      <section className={styles.preencherContainer}>
        <div>
          <SelectForm
            id="input-tipoImovel"
            value={tipoImovel}
            label="Imóvel"
            onChange={(event) => {
              setTipoImovel(event.target.value);
            }}
          >
            <MenuItem value="">Sem enquadramento</MenuItem>
            <MenuItem value="Residencial">Residencial</MenuItem>
            <MenuItem value="Comercial">Comercial</MenuItem>
          </SelectForm>

          <SelectForm
            id="input-condicaoImovel"
            value={condicaoImovel}
            label="Condição"
            onChange={(event) => {
              setCondicaoImovel(event.target.value);
            }}
          >
            <MenuItem value="">Sem enquadramento</MenuItem>
            <MenuItem value="Usado">Usado</MenuItem>
            <MenuItem value="Novo">Novo</MenuItem>
          </SelectForm>
        </div>
        <div>
          <NumericFormat
            value={compraEVenda}
            displayType={'input'}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$ '}
            customInput={TextField}
            {...inputCvProps}
            onValueChange={(values) => {
              const { formattedValue } = values;
              setCompraEVenda(formattedValue);
            }}
          />

          <NumericFormat
            value={financiamento}
            displayType={'input'}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$ '}
            customInput={TextField}
            {...inputFProps}
            onValueChange={(values) => {
              const { formattedValue } = values;
              setFinanciamento(formattedValue);
            }}
          />
        </div>

        <div>
          <NumericFormat
            value={fgts}
            displayType={'input'}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$ '}
            customInput={TextField}
            {...inputFgtsProps}
            onValueChange={(values) => {
              const { formattedValue } = values;
              setFGTS(formattedValue);
            }}
          />

          <SelectForm
            id="input-enquadramento"
            value={enquadramento}
            label="Enquadramento"
            onChange={(event) => {
              setEnquadramento(event.target.value);
            }}
          >
            <MenuItem value="">Sem enquadramento</MenuItem>
            <MenuItem value="MCMV">MCMV</MenuItem>
            <MenuItem value="Pró-cotista">Pró-cotista</MenuItem>
            <MenuItem value="SBPE">SBPE</MenuItem>
          </SelectForm>
        </div>

        <div>
          <InputLeitura
            id={`prazoMaximo`}
            label="Prazo"
            value={
              isFinite(prazoMaximo)
                ? prazoMaximo + ' meses'
                : 'Data de nascimento não definida'
            }
          />
        </div>

        <MultilineForm
          id="input-observacao"
          value={observacao}
          label="Observação"
          onChange={(event) => {
            setObservacao(event.target.value);
          }}
        />
      </section>
    </section>
  );
}
