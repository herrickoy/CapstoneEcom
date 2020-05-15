import React, { Component } from 'react';
import SignInModal from '../modals/signInModal';

import DemoCarousel from '../image features/carousel';
import teach_kids from "../../../static/images/toilet paper rolls/main/teach_kids.png";
import painful from "../../../static/images/toilet paper rolls/main/painful.png";
import thought_bubble from "../../../static/images/toilet paper rolls/main/thought-bubble.png";
import twit from "../../../static/images/toilet paper rolls/logos/twitter.png";
import insta from "../../../static/images/toilet paper rolls/logos/insta.png";
import fb from "../../../static/images/toilet paper rolls/logos/fb.png";
import paper from "../../../static/images/toilet paper rolls/logos/paper.png";


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false
        }

        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        
    }
    

    handleOpenModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    

    render() {
        return (
            <div className='homepage-wrapper'>

                <SignInModal activeModal={this.state.modalIsOpen}/>
{/* //////////////////////////////////////////////// */}
                <div className="home-content-wrapper">
                    <div className="left-home-column">
                        <div className="sign-in-btn-wrapper">
                            <button className="sign-in-btn" onClick={this.handleOpenModal}>
                                <h1>Click here to Sign in!</h1>
                                <p>Did you know Users get access to special items in the store?</p>
                            </button>
                        </div>
                        <div className="buttHurt">   
                            <div className="painful-wrapper"> 
                                <p >Feeling butt hurt?</p>
                                <img className="painful" src={painful}/>
                            </div>
                            <div className="bubble-link-wapper">
                                <img className="thought-bubble" src={thought_bubble}/>
                                <div className="social-links">
                                    <a href="https://twitter.com"><img className="social-media" src={twit}/></a>
                                    <a href="https://instagram.com"><img className="social-media" src={insta}/></a>
                                    <a href="https://facebook.com"><img className="social-media" src={fb}/></a>
                                </div>
                            </div>
                            <div className="p-bottom">
                                <p>Get medicated wipes!</p>
                            </div>
                        </div>
                    </div>

                    <div className="center-home-column">
                        <DemoCarousel className="carousel" />

                        <div className="paper-wrapper">
                            <img className="paper" src={paper}/>
                        </div>

                    </div>

                    <div className="right-home-column">
                        <div className="teach_kids">
                            <a href="https://snotty-noses.com/blog/how-teach-your-child-wipe-their-bottom"><img className="teach_img" src={teach_kids}/></a>
                        </div>
                        <div className="which-type-wrapper">
                            <div className="which-type">
                                <a href="https://thetoiletzone.com/types-toilet-paper/">
                                    <h1>There are so many options!</h1>
                                    <h1>Which should I choose?</h1>
                                    <p>Enter the toilet Zone to find out!</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}