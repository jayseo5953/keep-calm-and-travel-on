import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

const Form = (props) => {

  const [inputValue, setInputValue] = useState(props.budget || 0);


  return (
    <form className='budget-input-form' onSubmit={(e)=>{
      e.preventDefault();
      props.setBudget(inputValue);
      }} >
      <label htmlFor="budget-input">Enter Your Budget</label>
      <input className='input-budget' type="text" name='input-budget' value={inputValue} id='budget-input'onChange={(e)=>{setInputValue(e.target.value)}}/>

      <Button variant="contained" color="primary" type='submit' >
        Submit
      </Button>

      {/* <button className='budget-button btn btn-primary' type="submit" >Submit</button> */}
    
    
    </form>
  );
};


export default Form;