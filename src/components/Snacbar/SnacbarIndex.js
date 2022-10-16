import React from "react";
import SnacbarContent from "./SnacbarContent";
import './styles.scss'

function SnacbarIndex() {
  return (
    <React.Fragment>
      <div className="snacbar-overlay-panel">
        <div className="mat-snack-bar-container mat-snack-bar-center mat-snack-bar-top">
          <div className="snack-bar-class">
            <SnacbarContent></SnacbarContent>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SnacbarIndex;
