import { TextField } from '@material-ui/core';

interface InputProps {
  type: 'text' | 'number'; 
  getValue: (value: string) => void; 
  value: string;
  title: string; 
}

const Input: React.FC<InputProps> = ({type, getValue, value, title}) => {
  
  const inputHandler: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    if(type !== 'number') {
      getValue(e.target.value)
      return; 
    }
    if(/^\d+$/.test(e.target.value) || e.target.value === '') {
      getValue(e.target.value);
    }; 
  } 
  return (
    <TextField 
      color="secondary"
      fullWidth
      id="outlined-basic" 
      label={title} 
      variant="outlined" 
      value={value}
      onChange={inputHandler}
      size="small"
    />
  )
}

export default Input
