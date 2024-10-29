import { useState } from 'react'
import '../css/BurgerMenu.css'
import BurgerMenuItemList from './BurgerMenuItemList.jsx'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='burger-menu'>
            <div className={`burger-menu_button ${isOpen ? 'open' : ''}`} onClick={onClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <nav className={`burger-menu_menu ${isOpen ? 'open' : ''}`}>
                <BurgerMenuItemList />
            </nav>
        </div>
    )
}

export default BurgerMenu
