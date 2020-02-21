import React from 'react';
import Form from './Form'
const FormSection = (props) => {
  return (
    <div className='form-section' >
      <h2> <strong>{props.city}</strong></h2>
      <Form budget={props.budget} setBudget={props.setBudget} />
    </div>
  );
};

export default FormSection;