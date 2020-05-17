import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';


import megaRoll from '../../../static/images/toilet paper rolls/highquality/Cplymegaroll.jpg';
import smallPack from '../../../static/images/toilet paper rolls/highquality/3plysmallpack.jpg';
import largePack from '../../../static/images/toilet paper rolls/highquality/3plylargepack.jpg';
import sixPack from '../../../static/images/toilet paper rolls/highquality/Cply6pack.jpg';
import twelvePack from '../../../static/images/toilet paper rolls/highquality/Cply12pack.jpg';

import twoPlyRoll from '../../../static/images/toilet paper rolls/midgrade/2plysplit1.jpg';
import twoPlysmallPack from '../../../static/images/toilet paper rolls/midgrade/2ply6pack.jpg';
import twoPlylargePack from '../../../static/images/toilet paper rolls/midgrade/2ply12pack.jpg';
import twoPlytwentyfour from '../../../static/images/toilet paper rolls/midgrade/2ply24pack.jpg';
import twoPlystack from '../../../static/images/toilet paper rolls/midgrade/2plystack.jpg';

import onePlyRoll from '../../../static/images/toilet paper rolls/midgrade/1plyroll.jpg';
import onePlysmallPack from '../../../static/images/toilet paper rolls/midgrade/2ply6pack.jpg';
import onePlylargePack from '../../../static/images/toilet paper rolls/midgrade/2ply12pack.jpg';
import onePlytwentyfour from '../../../static/images/toilet paper rolls/midgrade/2ply24pack.jpg';
import onePlystack from '../../../static/images/toilet paper rolls/midgrade/2plystack.jpg';

import hundredbill from '../../../static/images/toilet paper rolls/novelty/100$bill.jpg';
import anotherAhole from '../../../static/images/toilet paper rolls/novelty/anotherAhole.jpg';
import slowyourroll from '../../../static/images/toilet paper rolls/novelty/slowyourroll.jpg';
import kisses from '../../../static/images/toilet paper rolls/novelty/kisses.jpg';
import radioactive from '../../../static/images/toilet paper rolls/novelty/radioactivezone.jpg';
import Cart from './cart';

const modal1Products = [
  { id: uuidv4(), price: 600, imgSrc: megaRoll, name: 'One roll of 3 ply toilet paper' },
  { id: uuidv4(), price: 1600, imgSrc: smallPack,  name: 'small pack of 3 ply toilet paper' },
  { id: uuidv4(), price: 5600, imgSrc: largePack,  name: 'large pack of 3 ply toilet paper' },
  { id: uuidv4(), price: 3600, imgSrc: sixPack, name: '6 pack of of 3 ply toilet paper' },
  { id: uuidv4(), price: 9600, imgSrc: twelvePack, name: '12 pack of 3 ply toilet paper' }
]

class Browse extends Component {
  constructor(props, context) {
      super(props, context)

      this.state = {
        show: null,
        collection:[
          {
            id: 0,
            name: "megaRoll",
            price: "$1"
          }
        ]

      }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addItem = this.addItem.bind(this);
    
  }


  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  addItem (item) {
    console.log({ item })
    /*
    this.setState({
      collection: [...collection, newItem.props]
    })
    */
  }


  render() {
    // ref={imgRef => this.state.newItem = imgRef}
    const {addItem} = this.addItem;
      return (
          <div className="browse-page-wrapper">
            <button className="browsebtns" onClick={() => this.handleShow('myModal1')}>
              <h1>3 ply paper</h1>
            </button>
            <button className="browsebtns" onClick={() => this.handleShow('myModal2')}>
              <h1>2 ply paper</h1>
            </button>
            <button className="browsebtns" onClick={() => this.handleShow('myModal3')}>
              <h1>1 ply paper</h1>
            </button>
            <button className="browsebtns" onClick={() => this.handleShow('myModal4')}>
              <h1>Novelty paper</h1>
            </button>
            <ReactModal 
              isOpen={this.state.show == 'myModal1'} onHide={this.handleClose}
            >
            <button className="closeModal" onClick={() => this.handleClose('myModal1')}>
              <h1>X</h1>
            </button>
            <ul>
                {
                  this.state.collection.map(e => <li>{e.name} | price {e.price} </li>)
                }
              </ul>
                <div className='landing-page-markers myModal1'>
                  { 
                    modal1Products.map((product) => (
                      <p className="item-d-p" key={product.id}>
                        {product.name} ${Math.floor(product.price / 100)}
                        <button onClick={() => {
                          this.props.addItem(product)
                          // window.alert('Something')
                        }}><img id="0" name={product.name} src={product.imgSrc} price="$1" className="modal-img" alt="image" /></button>
                      </p>
                    ))
                  }
                </div>
            </ReactModal>   
            <ReactModal 
              isOpen={this.state.show == 'myModal2'} onHide={this.handleClose}
            >
            <button className="closeModal" onClick={() => this.handleClose('myModal2')}>
              <h1>X</h1>
            </button>
                <div className='landing-page-markers myModal2'>
                  <p className="item-d-p">
                    roll of 2 ply toilet paper
                    <img id="5" onClick={(e)=>this.cartClick} src={twoPlyRoll} price="$1" className="modal-img" alt="image" />
                  </p>
                  <p className="item-d-p">
                    small pack of 2 ply toilet paper
                    <img id="6" onClick={(e)=>this.cartClick} src={twoPlysmallPack} price="$2" className="modal-img" alt="image" />
                  </p>               
                  <p className="item-d-p">
                    large pack of 2 ply toilet paper
                    <img id="7" onClick={(e)=>this.cartClick} src={twoPlylargePack} price="$3" className="modal-img" alt="image" />
                  </p>               
                  <p className="item-d-p">
                    24 pack of 2 ply toilet paper
                    <img id="8" onClick={(e)=>this.cartClick} src={twoPlytwentyfour} price="$4" className="modal-img" alt="image" />
                  </p>               
                  <p className="item-d-p">
                    stack of 2 ply toilet paper
                    <img id="9" onClick={(e)=>this.cartClick} src={twoPlystack} price="$5" className="modal-img" alt="image" />
                  </p>                                               
                </div>

            </ReactModal>   
            <ReactModal 
              isOpen={this.state.show == 'myModal3'} onHide={this.handleClose}
            >
            <button className="closeModal" onClick={() => this.handleClose('myModal3')}>
              <h1>X</h1>
            </button>
                <div className='landing-page-markers myModal3'>
                  <p className="item-d-p">
                    roll of 1 ply toilet paper
                    <img id="10" onClick={(e)=>this.cartClick} src={onePlyRoll} price="$1" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    small pack of 1 ply toilet paper
                    <img id="11" onClick={(e)=>this.cartClick} src={onePlysmallPack} price="$1" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    large pack of 1 ply toilet paper
                    <img id="12" onClick={(e)=>this.cartClick} src={onePlylargePack} price="$1" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    24 pack of 1 ply toilet paper
                    <img id="13" onClick={(e)=>this.cartClick} src={onePlytwentyfour} price="$1" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    stack of 1 ply toilet paper
                    <img id="14" onClick={(e)=>this.cartClick} src={onePlystack} price="$1" className="modal-img" alt="image" />
                  </p>   
                </div>
            </ReactModal>                  
            <ReactModal 
              isOpen={this.state.show == 'myModal4'} onHide={this.handleClose}
            >
            <button className="closeModal" onClick={() => this.handleClose('myModal4')}>
              <h1>X</h1>
            </button>
                <div className='landing-page-markers myModal4'>
                  <p className="item-d-p">
                    $100 dollar bill paper
                    <img id="15" onClick={(e)=>this.cartClick} src={hundredbill} price="$10" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    A hole joke paper
                    <img id="16" onClick={(e)=>this.cartClick} src={anotherAhole} price="$10" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    slow your roll paper
                    <img id="17" onClick={(e)=>this.cartClick} src={slowyourroll} price="$10" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    kisses paper
                    <img id="18" onClick={(e)=>this.cartClick} src={kisses} price="$10" className="modal-img" alt="image" />
                  </p>   
                  <p className="item-d-p">
                    radioactive joke paper
                    <img id="19" onClick={(e)=>this.cartClick} src={radioactive} price="$10" className="modal-img" alt="image" />
                  </p>   
                </div>
            </ReactModal>                  
          </div>
      )
  }
}


export default Browse;
