import React from 'react';
import Form from './Form'
const FormSection = (props) => {
  return (
    <div className='form-section shadow ' >
      <div>

      <h1> <strong>{props.city}</strong></h1>
      <h2>${props.budget}</h2>
      </div>
      <Form budget={props.budget} setBudget={props.setBudget} />
    </div>
  );
};

export default FormSection;