import React, { Component } from 'react';

import ReactModal from 'react-modal';

import HomeModalForm from '../forms/hompagemodalForm';

ReactModal.setAppElement(".app-wrapper");

import p1 from "../../../static/images/toilet paper rolls/main/comfy.png";

export default class SignInModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeModal: false
        }

        this.handleSubmission = this.handleSubmission.bind(this);
    }


      
      handleSubmission() {
        
      }

    render() {
        return (
            <div className='modal-wrapper'>
                <ReactModal 
                isOpen={this.props.activeModal}
                onRequestClose={() => {
                    this.handleCloseModal();
                }}
                style={{
                    overlay: {},
                    content: {
                    background: ''
                    }
                }}
                
                >
                    <div className='modal-content-wrapper'>
                        <img className='purchase_img' src={p1}/>
                        <HomeModalForm className='homeModalForm' />
                        
                    </div>
                </ReactModal>
            </div>
        )
    }
}