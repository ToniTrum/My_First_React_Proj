import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navigation from '../../json/Navigation.json'
import '../../css/Header/BurgerMenuItemList.css'


const BurgerMenuItemList = () => {
    /* useState() -- хук, который позволяет добавлять переменную состояния к компоненту */
    const [ hoveredItem, setHoveredItem ] = useState(null)
    
    return (
        <ul className='nav_ul'>
            {/* map() -- создает новый массив, заполненный 
                результатами вызова предоставленной функции 
                для каждого элемента в вызывающем массиве.
                В данном случае из массива достаются названия
                элементов меню и отображаются с тегом li */}
            {navigation.items.map((item, index) => (
                /* motion -- элемент, оптимизирующий анимацию и позволяющий применять
                    возможности framer motion */
                <motion.li
                className="nav_ul_li"
                key={index}
                /* onMouseEnter -- отслеживает положение мыши и срабатывает, если она
                    наведена на элемент */
                onMouseEnter={() => setHoveredItem(index)}
                /* onMouseOut -- отслеживает положение мыши и срабатывает, если она
                    расположена вне границ элемента */
                onMouseOut={() => setHoveredItem(null)}
                >
                    <a
                    href={item.href}
                    className={"nav_ul_li_ref" + (index === hoveredItem ? " ref_hover" : "")}
                    style={{color: index === hoveredItem ? "#08e0dc" : 'rgb(245, 236, 236)'}}>
                        {item.title}
                    </a>
                    {(index === hoveredItem) && (
                        <motion.div
                        className="nav_ul_li_underline"
                        /* initial -- начальное положение */
                        initial={{width: 0}}
                        /* animate -- анимация */ 
                        animate={{width: '100%'}}
                        /* transition -- продолжительность анимации */ 
                        transition={{duration: 0.5}} />
                    )}
                </motion.li>
            ))}
        </ul>
    )
}

export default BurgerMenuItemList