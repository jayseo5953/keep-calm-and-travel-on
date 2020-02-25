import React from "react"

const Destination = (props) => {

  return (
    <div>
      <span><h3>{props.destination.city}San Francisco, {props.destination.country}USA</h3></span>
    </div>
  )
}

export default Destination
