import React from 'react';
import ModalComponent from './Modal/Modal';
import './Modal/styles.scss'

export default class Home extends React.Component {

   constructor( props ) {
      super( props );

      this.state = {
         showModal: false
      }
   }

   toggleModal = () => {
      this.setState({
         showModal: ! this.state.showModal
      })
   };


render() {

   const { showModal } = this.state;

   return(
      <React.Fragment>
         <button 
            className="modal-toggle-button"
            onClick={this.toggleModal}
         >
            { ! showModal ? 'Open Modal' : 'Close Modal' }
         </button>
            {
               showModal ? (
                  <ModalComponent>
                     <div className='my-modal'>
                     <h1>Heading</h1>
                     <p>Lorem ipsum </p>
                     <button 
                        className="modal-close"
                        onClick={this.toggleModal}
                     >X</button> </div>
                  </ModalComponent>
               ) : null
            }

      </React.Fragment>
   );
}
}
