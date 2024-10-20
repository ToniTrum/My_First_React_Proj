import reactLogo from '../img/react.svg'
import { Component } from 'react'
import '../css/Header.css'

import BurgerMenu from './BurgerMenu.jsx'


/* React позволяет определять компоненты как классы или функции. 
    */
class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <img className='header_logo' src={reactLogo} alt="React Logo" />
                    <h1 className="header_title">My First React Project</h1>
                </div>
                <BurgerMenu />
            </header>
        )
    }
}

export default Header
