import { TextField } from '@mui/material';
import styles from './InputLeitura.module.css';

export default function InputLeitura(props) {
  return (
    <TextField
      name={props.id}
      id={props.id}
      label={props.label}
      value={props.value}
      variant="outlined"
      onChange={props.onChange}
      InputProps={{
        readOnly: true,
        style: {
          backgroundColor: 'white',
          flex: '1',
        },
      }}
    />
  );
}
