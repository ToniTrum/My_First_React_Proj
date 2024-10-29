import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navigation from '../json/Navigation.json'
import '../css/BurgerMenuItemList.css'


const BurgerMenuItemList = () => {
    const [ hoveredItem, setHoveredItem ] = useState(null)
    
    return (
            <ul className='nav_ul'>
                {/* map() -- создает новый массив, заполненный 
                    результатами вызова предоставленной функции 
                    для каждого элемента в вызывающем массиве.
                    В данном случае из массива достаются названия
                    элементов меню и отображаются с тегом li */}
                {navigation.items.map((item, index) => (
                    <motion.li
                    className="nav_ul_li"
                    key={index}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseOut={() => setHoveredItem(null)}
                    >
                        <a
                        href={item.href}
                        className={"nav_ul_li_ref" + (index === hoveredItem ? " ref_hover" : "")}
                        style={{color: index === hoveredItem ? "#08e0dc" : 'rgb(245, 236, 236)'}}>
                            {item.title}
                        </a>
                        {(index === hoveredItem) && (
                            <AnimatePresence>
                                <motion.div
                                layoutId="underline"
                                className="nav_ul_li_underline"
                                initial={{width: 0}}
                                animate={{width: '100%'}}
                                transition={{duration: 0.5}} />
                            </AnimatePresence>
                        )}
                    </motion.li>
                ))}
            </ul>
    )
}

export default BurgerMenuItemList