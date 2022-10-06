import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler("Child Component")} type="button" className="btn btn-primary">Greet Parent</button>
    </div>
  )
}

export default ChildComponent