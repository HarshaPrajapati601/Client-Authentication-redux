import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderHeader = () => {
        return(
            <div className='d-flex justify-content-between align-items-center'>
                 <Link to="/"> Redux Auth</Link>

                <Link to="/signup"> Sign Up</Link>

                <Link to="/signin"> Sign In</Link>

                <Link to="/feature"> Feature</Link>
            </div>
        )
    }
   render(){
    return(
        <div className="container">
            { this.renderHeader() }
        </div>
    )
   }
};

export default Header;