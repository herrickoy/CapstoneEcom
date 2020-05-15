import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Browse from "./pages/browse";
import NewReleases from "./pages/new-releases";
import About from "./pages/history-of";
import QuickOrder from "./pages/quick-order";
import Cart from "./pages/cart";
import Icons from './helpers/icons';

library.add(faTrash, faSignOutAlt, faShoppingCart);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null

  }
  this.handleAuth = this.handleAuth.bind(this);
  this.handleLogout=this.handleLogout.bind(this);
  this.loginSuccess=this.loginSuccess.bind(this);
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
  handleLogout() {
    firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} logged out of session`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

  loginSuccess() {
    if(this.state.user) {
        return(
            <div>
                <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
                <p>Welcome to the ecommerce {this.state.user.displayName}</p>
                <button>Click here</button>
                <button onClick={this.handleLogout}>Sign out</button>
            </div>
        );  
    }
    else {
        return(
            <div>
                <button onClick={this.handleAuth}></button>
            </div>
        )
    }
  }

  
  addItem = (props) => {
    this.setState({
      
    })
  }



  render() {
    const handleLogout = "LogOut";
    return (
      <div className='app-wrapper'>
        <Router>
          <div>
            <NavigationContainer handleLogout={handleLogout} />
            <Switch>
              <Route exact path="/" component={Home}  />
              {/* SIGNIN SIGNUP MODAL ON HOME */}
              <Route path="/browse" render={(props) => <Browse {...props} addItem={this.addToCart.bind(this, ...props)}  />} />
              <Route path="/new-releases" component={NewReleases} />
              <Route path="/history-of" component={About} />
              <Route path="/quick-order" component={QuickOrder} />
              <Route path="/cart" render={(props) => <Cart {...props}  />}/>
            </Switch>
          </div>
        </Router>
        <button className='modal-btn' onClick={this.handleAuth}>Login to google</button>
        {this.loginSuccess()}
      </div>
    );
  }
}
