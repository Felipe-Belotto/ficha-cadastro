import React, { useContext, useEffect, useState } from 'react';
import styles from './Formulario.module.css';
import InputLeitura from '../InputLeitura/InputLeitura';
import { Button } from '@mui/material';
import { CadastroContext } from '../../context/cadastroInfo';
import FormPessoal from '../FormPessoal/FormPessoal';
import FormEndereco from '../FormEndereco/FormEndereco';
import FormRenda from '../FormRenda/FormRenda';
import FormProposta from '../FormProposta/FormProposta';
import PaginaResultado from '../PaginaResultado/PaginaResultado';
import BotoesEtapas from '../BotoesEtapas/BotoesEtapas.jsx';
import FormProponentes from '../FormProponentes/FormProponentes';

/* 005ca9 */

export default function Formulario() {
  const { status, setStatus, listaRendas } = useContext(CadastroContext);

  return (
    <>
      <form style={{ display: status < 6 ? 'flex' : 'none' }}>
        <section className={styles.container}>
          <FormPessoal />
          <FormEndereco />
          <FormRenda />
          <FormProponentes />
          <FormProposta />
        </section>

        <BotoesEtapas />

        <ul
          className={styles.listaRendas}
          style={{ display: status === 3 ? 'flex' : 'none' }}
        >
          {status === 3
            ? listaRendas.map((renda, index) => (
                <li key={index} className={styles.rendaContainer}>
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
              ))
            : ''}
        </ul>
      </form>

      <PaginaResultado />
    </>
  );
}
