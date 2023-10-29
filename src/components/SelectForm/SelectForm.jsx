import styles from './SelectForm.module.css';
import { FormControl, InputLabel, Select } from '@mui/material';

export default function SelectForm(props) {
  const MenuLabel = {};

  const selectStyle = {
    color: 'black',
    backgroundColor: 'white',
  };

  const selectOptionStyle = {
    color: 'black',
    backgroundColor: 'white',
  };
  return (
    <FormControl fullWidth variant="outlined" className={styles.input}>
      <InputLabel id="demo-simple-select-label" style={MenuLabel}>
        {props.label}
      </InputLabel>
      <Select
        id={props.id}
        label={props.id}
        style={selectStyle}
        onChange={props.onChange}
        value={props.value}
        required
        MenuProps={{ PaperProps: { style: selectOptionStyle } }}
      >
        {props.children}
      </Select>
    </FormControl>
  );
}
