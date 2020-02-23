import React, {useEffect, useState} from 'react';
import Main from '../../main/components/Main'

const EditTrip = (props) => {

  const params = props.match.params;
  const city = params.city
  let budgetParam = !isNaN(params.budget)? params.budget:0;

  const [initialBudget, setInitialBudget] = useState(budgetParam)
  console.log(budgetParam)
  return (
    <div>
      <h1>You are in edit page</h1>
      {/* <Main /> */}
    </div>
  );
};

export default EditTrip;