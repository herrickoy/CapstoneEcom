import React, { Component } from 'react';
import firebase from 'firebase';


export default class HomeModal extends Component {
    constructor(props) {
        super(props)

        this.handleAuth = this.handleAuth.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => 
            {this.setState({user});
      });
      }
 
    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} logged into session`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }


    render() {
        return (
            <form className='home-modal-wrapper'>
                <div className="modal-greeting">Log in as User...</div>
                    <div className="inputs-wrapper">
                    <button onclick={this.handleAuth}>Login to google</button>
                        {/* <input 
                        className="modal-input_1"
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        placeholder="e-Mail"
                        value={this.state.email} 
                        />
                        <input 
                        className="modal-input_2"
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        placeholder="Password"
                        value={this.state.password} 
                        /> */}
                    </div>
                    <div className="modal-btn-wrapper">
                            {/* <button className='modal-btn' onclick={this.handleAuth}>Login to google</button> */}
                    </div>
            </form>
        )
    }
}