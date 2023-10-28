import React, { useContext, useEffect, useState } from 'react';
import styles from './Formulario.module.css';
import InputLeitura from '../InputLeitura/InputLeitura';
import { Button } from '@mui/material';

import { CadastroContext } from '../../context/cadastroInfo';
import FormPessoal from '../FormPessoal/FormPessoal';
import FormEndereco from '../FormEndereco/FormEndereco';
import FormRenda from '../FormRenda/FormRenda';

/* 005ca9 */

export default function Formulario() {
  const { status, setStatus, listaRendas } = useContext(CadastroContext);

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

  return (
    <form>
      <section className={styles.container}>
        <FormPessoal />
        <FormEndereco />
        <FormRenda />

        <section className={styles.containerBotoes}>
          <Button
            variant="outlined"
            style={{
              display: status === 1 ? 'none' : 'flex',
              backgroundColor: '#021c4097',
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

      <ul
        className={styles.listaRendas}
        style={{ display: status === 3 ? 'flex' : 'none' }}
      >
        {listaRendas.map((renda) => (
          <li className={styles.rendaContainer}>
            <h1 className={styles.listaRendasTitulo}>{renda.tipo}</h1>

            <div>
              <InputLeitura
                id={`cnpjDaEmpresa${renda.cnpj}`}
                label="CNPJ"
                value={renda.cnpj}
              />
              <InputLeitura
                key={`admissaoDaEmpresa${renda.cnpj}`}
                label="Admissao"
                value={renda.admissao}
              />
            </div>

            <InputLeitura
              key={`rendaDaEmpresa${renda.cnpj}`}
              label="Renda"
              value={renda.renda}
            />
          </li>
        ))}
      </ul>
    </form>
  );
}
