import React from "react"
const Advice = ({advice,getAdvice,count}) => {
  return (
    <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <p> <b>{count}</b> advice</p>
    </div>
  )
}

export default Advice