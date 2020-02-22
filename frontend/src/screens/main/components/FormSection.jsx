import React from 'react';
import Form from './Form'
import SaveTrip from './SaveTrip'

const FormSection = (props) => {
  return (
    <div className='form-section shadow ' >
      <div>
        <h1> <strong>{props.city}</strong></h1>
        <h2> {props.budget>=0?`$${props.budget}`:`-$${-props.budget}`}  </h2>
      </div>
      <Form budget={props.budget} setBudget={props.setBudget} />
      <SaveTrip columns={props.columns} />
    </div>
  );
};

export default FormSection;