import { useState } from 'react'
import '../css/BurgerMenu.css'
import navigation from '../json/Navigation.json'

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
                <ul className='nav_ul'>
                    {/* map() -- создает новый массив, заполненный 
                        результатами вызова предоставленной функции 
                        для каждого элемента в вызывающем массиве.
                        В данном случае из массива достаются названия
                        элементов меню и отображаются с тегом li*/}
                    {navigation.elements.map((element) => (
                        <li className='nav_ul_li'>
                            <a className='nav_ul_li_ref' href="#" target="_blank">{element}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default BurgerMenu
