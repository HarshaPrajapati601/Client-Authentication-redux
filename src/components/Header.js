import React, { Component} from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

class Header extends Component {

    renderHeader = () => {
        return(
            <ul>
                <li>
                <Link to="/"> Redux Auth</Link>
                </li>
                <li>
                <Link to="/signup"> Sign Up</Link>
                </li>
                <li>
                <Link to="/signin"> Sign In</Link>
                </li>
                <li>
                <Link to="/feature"> Feature</Link>
                </li>
            </ul>
        )
    }
   render(){
    return(
        <div>
             { this.renderHeader() }
        </div>
    )
   }
};

export default Header;