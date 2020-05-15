import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Browse from './browse';


export default class Cart extends Component {
  constructor(props) {
      super(props)


      this.state = {
        show: null
      }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  

  cartTotal(){
    let endTotal = userCart.reduce(function(prev, current) {
        return prev + +current.price
      }, 0);
      return(endTotal);
  }


  render() {
      return (
          <div className="cart-page-wrapper">
            <div className="currentCart">
                
            </div>
            <div className="currentTotal">
                <h1>Current Total is {this.endTotal}</h1>
            </div>
            <button className="purchase-button" onClick={() => this.handleShow('confirmModal')}>
                Purchase Paper
            </button>
            <ReactModal 
              isOpen={this.state.show == 'confirmModal'} onHide={this.handleClose}
            >
            <button className="closeModal" onClick={() => this.handleClose('confirmModal')}>
              <h1>X</h1>
            </button>
                YOUR ORDER IS CONFIRMED! You total is {this.endTotal}
            </ReactModal>
          </div>
      )
  }
}