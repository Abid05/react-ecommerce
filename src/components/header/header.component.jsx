import React from 'react'
import {Link } from 'react-router-dom';
import './header.style.css';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg'
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {currentUser ? <div className="c-pointer option" onClick={() =>{auth.signOut()} }>Sign Out</div> : <Link className="option" to="/signin">Sign In</Link>}
            </div>
        </div>
    )
}
export default Header;
