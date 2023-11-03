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
  const { status, empresaAtual, setStatus, listaRendas, setListaRendas } =
    useContext(CadastroContext);

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
      </form>

      <PaginaResultado />
    </>
  );
}
