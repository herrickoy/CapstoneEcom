import React, { Component } from 'react';
import ReactModal from 'react-modal';

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

class Browse extends Component {
  constructor(props, context) {
      super(props, context)

      this.state = {
        show: null,
        collection:[]

      }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.imgRef = React.createRef();
  }


  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }



  render() {
    // ref={imgRef => this.state.newItem = imgRef}
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
                <div className='landing-page-markers myModal1'>
                  <p className="item-d-p">
                    One roll of 3 ply toilet paper $1
                    <img id="0" onClick={() => addItem()} src={megaRoll} price="$1" className="modal-img" alt="image" />
                  </p>
                  <p className="item-d-p">
                    small pack of 3 ply toilet paper
                    <img id="1" onClick={(e) => {this.addItem(e)}} src={smallPack} price="$2" className="modal-img" alt="image" />
                  </p>
                  <p className="item-d-p">
                    large pack of 3 ply toilet paper
                    <img id="2" ref={imgRef => this.newItem = imgRef} onClick={(e) => {this.addItem(e)}} src={largePack} price="$3" className="modal-img" alt="image" />
                  </p>
                  <p className="item-d-p">
                    6 pack of of 3 ply toilet paper
                    <img id="3" ref={imgRef => this.newItem = imgRef} onClick={(e) => {this.addItem(e)}} src={sixPack} price="$4" className="modal-img" alt="image" />
                  </p>
                  <p className="item-d-p">
                    12 pack of 3 ply toilet paper
                    <img id="4" ref={imgRef => this.newItem = imgRef} onClick={(e) => {this.addItem(e)}} src={twelvePack} price="$5" className="modal-img" alt="image" />
                  </p>
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
