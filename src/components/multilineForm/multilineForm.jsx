import { TextField } from '@mui/material';
import styles from './multilineForm.module.css';

export default function MultilineForm(props) {
  return (
    <TextField
      name={props.id}
      id={props.id}
      label={props.label}
      value={props.value}
      variant="outlined"
      onChange={props.onChange}
      autoComplete="none"
      multiline
      rows={5}
      InputProps={{
        style: {
          backgroundColor: 'white',
          flex: '1',
        },
      }}
    />
  );
}
