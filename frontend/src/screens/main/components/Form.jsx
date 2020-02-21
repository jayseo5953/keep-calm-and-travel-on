import React, {useState} from 'react';

const Form = (props) => {

  const [inputValue, setInputValue] = useState(props.budget || 0);


  return (
    <form className='budget-input-form' onSubmit={(e)=>{
      e.preventDefault();
      props.setBudget(inputValue);
      }} >
      <h2>${props.budget}</h2>
      <label htmlFor="budget-input">Enter/Change in your Budget</label>
      <input className='input-budget' type="text" name='input-budget' value={inputValue} id='budget-input'onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button className='budget-button btn btn-primary' type="submit" >Submit</button>
    </form>
  );
};

export default Form;