import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Browse from './browse';


export default class Cart extends Component {
  constructor(props) {
      super(props)
      let cart = localStorage.getItem('cart');
      cart = cart === null ? [] : JSON.parse(cart);
      

      const total = cart.reduce((acc, cur) => {
        const sum = acc + cur.price;
        return sum;
      }, 0)

      console.log({ cart, total })
      this.state = {
        show: null,
        cart: cart,
        total: total,
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
    const {addedToCart} =this.props
      return (
          <div className="cart-page-wrapper">
            <div className={`currentCart ${addedToCart}`}>
                {
                  this.state.cart.map(({ id }) => (
                    <p key={id}>{id}</p>
                  ))
                }
            </div>
            <div className="currentTotal">
                <h1>Current Total is ${Math.floor(this.state.total / 100)}</h1>
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
                YOUR ORDER IS CONFIRMED! You total is ${Math.floor(this.state.total / 100)}
            </ReactModal>
          </div>
      )
  }
}