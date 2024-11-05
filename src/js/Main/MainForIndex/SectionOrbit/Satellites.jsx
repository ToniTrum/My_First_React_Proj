import '../../../../css/Main/MainForIndex/SectionOrbit/Satellites.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import satellitesData from './satellitesData'

const Satellites = ({ellipseRef}) => {
    const [ellipseData, setEllipseData] = useState(null)
    const [satelliteRadius, setSatelliteRadius] = useState(0)
    const [satellitePositions, setSatellitePositions] = useState([])

    /* useEffect -- это хук, который можно использовать для замены некоторых 
       методов жизненного цикла классового компонента. 
       Первый аргумент — это функция обратного вызова, для которой будут 
       выполняться побочные эффекты 
       Второй аргумент – массив зависимостей */ 
    useEffect(() => {
        const updateEllipseData = () => {
            if (ellipseRef.current) {
                const rx = ellipseRef.current.rx.baseVal.value
                const ry = ellipseRef.current.ry.baseVal.value
                const cx = ellipseRef.current.cx.baseVal.value
                const cy = ellipseRef.current.cy.baseVal.value

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
        // Добавление слушателя события изменения размера окна
        window.addEventListener('resize', updateEllipseData)

        return () => {
            // Добавление удаление события изменения размера окна
            window.removeEventListener('resize', updateEllipseData)
        }
    }, [ellipseRef])


    useEffect(() => {
        if (!ellipseData) return
        
        // Начальный угол, от которого будут отчситываться углы спутников
        let angle = 0 

        const animateSatellites = () => {
            setSatellitePositions(
                satellitesData.map((satellite) => {
                    // Угол для элемента в радианах
                    const currentAngle = (satellite.initialAngle + angle) * Math.PI / 180
                    // Эксцентриситет эллипса
                    const eccentricity = Math.sqrt(1 - Math.pow(ellipseData.ry / ellipseData.rx, 2))
                    // Радиус эллипса в выбранной точке
                    const ellipseRadiusAtSelectedPoint = ellipseData.ry / Math.sqrt(1 - Math.pow(eccentricity * Math.cos(currentAngle), 2))

                    // Позиция элемента для выбранного угла
                    const posX = ellipseData.cx + ellipseRadiusAtSelectedPoint * Math.cos(currentAngle) - satelliteRadius
                    const posY = ellipseData.cy + ellipseRadiusAtSelectedPoint * Math.sin(currentAngle) - satelliteRadius

                    return { x: posX, y: posY }
                })
            )
            angle = (angle + 0.2) % 360
            /* requestAnimationFrame -- указывает браузеру на то, что необходимо произвести 
               анимацию, и просит его запланировать перерисовку на следующем кадре анимации. 
               В качестве параметра метод получает функцию, которая будет вызвана перед 
               перерисовкой */
            requestAnimationFrame(animateSatellites)
        }

        const animationFrameId = requestAnimationFrame(animateSatellites)
        /* cancelAnimationFrame -- останавливает анимацию, запланированную с помощью 
        window.requestAnimationFrame() */
        return () => cancelAnimationFrame(animationFrameId)
    }, [ellipseData, satelliteRadius])


    return (
        <>
            {satellitesData.map((satellite, index) => (
                <motion.a
                key={index}
                href={satellite.href}
                target='_blank' >
                    <motion.img
                    className={`section-orbit__satellite ${satellite.className}`}
                    src={satellite.img}
                    alt={satellite.alt}
                    style={{ 
                        transform: `translate(${satellitePositions[index]?.x || 0}px, ${satellitePositions[index]?.y || 0}px)` 
                    }}
                /></motion.a>
            ))}
        </>
    )
}

export default Satellites