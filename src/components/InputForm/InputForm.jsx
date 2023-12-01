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
      autoComplete="none"
      InputProps={{
        inputProps: {
          maxLength: props.maxLength > 0 ? props.maxLength : 'none',
        },
        style: {
          backgroundColor: 'white',
          flex: '1',
        },
      }}
    />
  );
}

export default InputForm;
