import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
let addOrSubtract='';

const Form = (props) => {

  const [inputValue, setInputValue] = useState(props.budget||"");

  return (
    <form  autoComplete='off' className='budget-input-form' onSubmit={(e)=>{
      e.preventDefault();
      if(isNaN(inputValue)) return;
      // console.log("flag: ", addOrSubtract)
      if (addOrSubtract==='add'){
        console.log( "add ran")
        props.setBudget(Number(props.budget) + Number(inputValue||0));
        setInputValue("")
        return
      }
      if (addOrSubtract==='subtract') {
        console.log( "subtract ran")
        props.setBudget(Number(props.budget) - Number(inputValue||0));
        setInputValue("")
        return
      }
      }} >
      <label htmlFor="budget-input"> {!addOrSubtract&&!props.budget?'Enter Your Budget':'Increase or Decrease Your Budget'}</label>

      <input className='input-budget' type="text" name='input-budget' 
        value={inputValue}
        id='budget-input'onChange={(e)=>{
          setInputValue(e.target.value)
        }}/>
      {!addOrSubtract&&!props.budget? 
        <Button style={{width:"50%"}} variant="contained" color="primary" type='submit' onClick={()=>{
          if(isNaN(inputValue)) return;
          props.setBudget(inputValue||0);
          setInputValue("")
          addOrSubtract='submitted';
         }} >
        Submit
        </Button>
        :
        <div className='plus-minus'>
          <Button variant="contained" color="primary" type='submit' onClick={()=>{addOrSubtract='add' }}> 
          +
          </Button>
          <Button variant="contained" color="primary" type='submit' onClick={()=>{addOrSubtract='subtract' }} >
          -
          </Button>
        </div>
      }
     
  
    </form>
  );
};


export default Form;