import '../../css/Main/Satellites.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import reactLogo from '../../img/react-logo.svg'
import viteLogo from '../../img/vite-logo.svg'

const Satellites = ({ellipseRef}) => {
    const [ellipseData, setEllipseData] = useState(null)
    const [satelliteRadius, setSatelliteRadius] = useState(0)
    const [angle, setAngle] = useState(0)
    const [satellitePosition, setSatellitePosition] = useState({ x: 0, y: 0 })

    /* useEffect -- это хук, который можно использовать для замены некоторых 
       методов жизненного цикла классового компонента. 
       Первый аргумент — это функция обратного вызова, для которой будут 
       выполняться побочные эффекты 
       Второй аргумент – массив зависимостей */ 
    useEffect(() => {
        const updateEllipseData = () => {
            if (ellipseRef.current) {
                const rx = ellipseRef.current.rx.baseVal.value;
                const ry = ellipseRef.current.ry.baseVal.value;
                const cx = ellipseRef.current.cx.baseVal.value;
                const cy = ellipseRef.current.cy.baseVal.value;

                setEllipseData({
                    "rx": rx,
                    "ry": ry,
                    "cx": cx,
                    "cy": cy
                })

                setSatelliteRadius(
                    (ry + ry * 4) / 50 // 4% от родительского элемента
                )
            }
        }

        updateEllipseData()
        /* Обработчик события изменения размера окна */ 
        window.addEventListener('resize', updateEllipseData)

        return () => {
            window.removeEventListener('resize', updateEllipseData);
        }
    }, [ellipseRef])


    useEffect(() => {
        if (!ellipseData) return

        const computePosition = () => {
            const angleInRadians = angle * Math.PI / 180
            // Эксцентриситент
            const eccentricity = Math.sqrt(1 - Math.pow(ellipseData.ry / ellipseData.rx, 2))
            // Радиус эллипса в выбранной точке
            const ellipseRadiusAtSelectedPoint = ellipseData.ry / Math.sqrt(1 - Math.pow(eccentricity * Math.cos(angleInRadians), 2))
    
            const posX = ellipseData.cx + ellipseRadiusAtSelectedPoint * Math.cos(angleInRadians) - satelliteRadius
            const posY = ellipseData.cy + ellipseRadiusAtSelectedPoint * Math.sin(angleInRadians) - satelliteRadius
    
            setSatellitePosition({
                "x": posX,
                "y": posY
            })
        }

        computePosition()
    }, [angle, ellipseData, satelliteRadius])


    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prevAngle) => (prevAngle + 1) % 360)
        }, 100) // примерно 60 FPS

        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <motion.img
        className='section-orbit__satellite' 
        src={reactLogo} 
        alt="React Logo"
        animate={{
            y: satellitePosition.y,
            x: satellitePosition.x
        }}
        transition={{
            type: "spring", 
            stiffness: 50 
        }} />
        {/* <motion.img className='section-orbit__satellite' src={viteLogo} alt="React Logo" /> */}
        </>
    )
}

export default Satellites