import styles from './SelectForm.module.css';
import { FormControl, InputLabel, Select } from '@mui/material';

export default function SelectForm(props) {
  const MenuLabel = {};

  const SelectStyle = {
    color: 'black',
  };

  const SelectOption = {
    color: 'black',
    backgroundColor: 'white',
  };
  return (
    <FormControl fullWidth variant="outlined" className={styles.input}>
      <InputLabel id="demo-simple-select-label" style={MenuLabel}>
        Estado civil
      </InputLabel>
      <Select
        id={props.id}
        label={props.id}
        style={SelectStyle}
        onChange={props.onChange}
        value={props.value}
        required
        MenuProps={{ PaperProps: { style: SelectOption } }}
      >
        {props.children}
      </Select>
    </FormControl>
  );
}
