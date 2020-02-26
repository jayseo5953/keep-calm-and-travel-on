import React from 'react'

const Total = (props) => {
  console.log('props of total', props)
  return (
    <div>
      <h4><strong>Total cost:</strong> ${props.total}</h4>
    </div>
  )
}

export default Total;
