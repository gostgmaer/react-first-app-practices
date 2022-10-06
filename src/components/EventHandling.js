import React from 'react'

function EventHandling() {
  function clickHandler(params) {
    console.log(params);
    
  }
  return (
    <div>
      <button type="button" onClick={clickHandler} className="btn btn-primary">Click ME</button>
    </div>
  )
}

export default EventHandling