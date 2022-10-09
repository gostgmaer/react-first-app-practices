import React from "react";

function MemoComponent({ name }) {
    console.log("Rendraing Memo Components");
  return <div>
        <div>{name}</div>
    MemoComponent
    
    </div>;
}

export default React.memo(MemoComponent) ;
