import styles from '../SubTitulo/SubTitulo.module.css';

export default function SubTitulo(props) {
  return <h2 className={styles.subtitulo}>{props.texto}</h2>;
}
