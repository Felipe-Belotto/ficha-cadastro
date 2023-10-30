import { Button, MenuItem, TextField } from '@mui/material';
import styles from '../Formulario/Formulario.module.css';
import InputForm from '../InputForm/InputForm';
import SelectForm from '../SelectForm/SelectForm';
import Titulo from '../Titulo/Titulo';
import { useContext, useEffect } from 'react';
import { CadastroContext } from '../../context/cadastroInfo';
import { NumericFormat } from 'react-number-format';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLeitura from '../InputLeitura/InputLeitura';

export default function FormRenda() {
  const {
    renda,
    listaRendas,
    status,
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

  function adicionaRenda(event) {
    const listaAtualizada = [...listaRendas, renda];
    setListaRendas(listaAtualizada);
    console.log(listaRendas);

    const rendaVazia = {
      cnpj: '',
      admissao: '',
      tipo: renda.tipo,
      renda: '',
    };

    setRenda(rendaVazia);
  }

  const valorNumerico = Number(
    String(somaRendas)
      .replace(/[^\d,]/g, '')
      .replace(',', '.'),
  );
  return (
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

          <InputForm
            id="input-admissao"
            value={renda.admissao}
            label="Admissão"
            maxLength="10"
            onChange={(event) => {
              const atualizaRenda = { ...renda };
              atualizaRenda.admissao = event.target.value
                .replace(/[^\d]/g, '')
                .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
              setRenda(atualizaRenda);
            }}
          />
        </div>

        <div>
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
            <MenuItem value="Imposto de renda">Imposto de renda</MenuItem>
            <MenuItem value="CLT">CLT</MenuItem>
            <MenuItem value="Pró labore">Pró labore</MenuItem>
            <MenuItem value="Informal">Informal</MenuItem>
          </SelectForm>

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
      </section>
    </section>
  );
}
