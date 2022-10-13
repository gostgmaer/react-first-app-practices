import React from "react";

function SnacbarContent() {
  let styleObject={
      "notificationP":{
        height: "116px", width: "100%", transition: "height 10ms ease 0s"

      },
      timerFiller:{
        "animationName": "timer", animationDuration: "5000ms", "animationTimingFunction": "linear", "animationFillMode":"forwards", "animationPlayState": "running"

      }

  }
  return (
    // <div classNameName="mat-simple-snackbar ">
    //   <span classNameName="mat-simple-snack-bar-content">
    //     Please enter a valid Username
    //   </span>
    //   <div classNameName="mat-simple-snackbar-action ">
    //     <button classNameName="mat-focus-indicator btn btn-primary mat-button mat-button-base">
    //       <span classNameName="mat-button-wrapper">OK</span>
    //       <span matripple="" classNameName="mat-ripple mat-button-ripple "></span>
    //       <span classNameName="mat-button-focus-overlay"></span>
    //     </button>
    //   </div>
    // </div>
    <div className="react-notification-root ">
      <div className="notification-container-top-left">
      
      </div>
      <div className="notification-container-top-right">
        <div
          className="notification-parent"
          style={styleObject.notificationP}
        >
          <div className="animated fadeIn notification-item notification-success n-child">
            <div className="notification-content">
              <div className="notification-title">Virtual Waiting Room</div>
              <div className="notification-message">
                Queue staff assignment updated successfully
              </div>
              <div className="timer">
                <div
                  className="timer-filler"
                   style={styleObject.timerFiller}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-container-bottom-left">
      <div
          className="notification-parent"
          style={styleObject.notificationP}
        >
          <div className="animated fadeIn notification-item notification-danger n-child">
            <div className="notification-content">
              <div className="notification-title">Virtual Waiting Room</div>
              <div className="notification-message">
                Queue staff assignment updated successfully
              </div>
              <div className="timer">
                <div
                  className="timer-filler"
                   style={styleObject.timerFiller}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-container-bottom-right">
    
      </div>
      <div className="notification-container-top-center">
    
      </div>
      <div className="notification-container-center">
        <div className="center-inner">
       
        </div>
      </div>
      <div className="notification-container-bottom-center">
     
      </div>
    </div>
  );
}

export default SnacbarContent;
