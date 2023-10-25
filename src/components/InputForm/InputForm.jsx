import { TextField } from '@mui/material';
import styles from './InputForm.module.css';

function InputForm(props) {
  return (
    <TextField
      name={props.id}
      id={props.id}
      label={props.label}
      value={props.value}
      variant="outlined"
      onChange={props.onChange}
      InputProps={{
        style: {
          width: props.value.length * 10,
          minWidth: '315px',
        },
      }}
    />
  );
}

export default InputForm;
