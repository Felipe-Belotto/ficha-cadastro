import { TextField } from '@mui/material';
import styles from './InputForm.module.css';

function InputForm(props) {
  const widthDinamico = {
    width: `${props.value.length * 10}px`,
  };
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
          ...widthDinamico,
          minWidth: '250px',
        },
      }}
    />
  );
}

export default InputForm;
