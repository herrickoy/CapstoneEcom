import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import Icons from '../helpers/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase";




const NavigationComponent = props => {
  
  const dynamicLink = (route, linkText) => {
      return (
          <div className="nav-link-wrapper">
              <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
          </div>  
      )
  }


  return (
      <div className="nav-wrapper">
        <div className="top-nav">
          <div className="contact">
            <div className="phone">
              555-555-5555
            </div>
            <div className="email">
              test@test.com
            </div>
          </div>
          <div className="company">
            TP +Plus
          </div>
          <div className="nav-icons">
            <div className="shopping-cart">
              <NavLink to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </NavLink>
            </div>
            <div className="sign-out">
              <FontAwesomeIcon icon="sign-out-alt" />
            </div>
          </div>
        </div>
            <div className="bottom-nav">
              <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div> 

                    <div className="nav-link-wrapper">
                        <NavLink to="/browse" activeClassName="nav-link-active">Browse</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/new-releases" activeClassName="nav-link-active">New Releases</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/history-of" activeClassName="nav-link-active">History</NavLink>
                    </div>   

                    <div className="nav-link-wrapper">
                        <NavLink to="/quick-order" activeClassName="nav-link-active">QuickOrder</NavLink>
                    </div>  
              </div>

              <div className="right-side">
                     
                </div>
            </div>
      </div>
  )
}

export default withRouter(NavigationComponent);