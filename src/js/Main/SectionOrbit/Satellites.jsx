import '../../../css/Main/SectionOrbit/Satellites.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import satellitesData from './satellitesData'

const Satellites = ({ellipseRef}) => {
    const [ellipseData, setEllipseData] = useState(null)
    const [satelliteRadius, setSatelliteRadius] = useState(0)
    const [angle, setAngle] = useState(0)
    const [satellitePositions, setSatellitePositions] = useState([])

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
        const intervals = satellitesData.map((satellite, index) =>
            setInterval(() => {
                setSatellitePositions((prevPositions) => {
                    const newPositions = [...prevPositions]
                    const angleInRadians = (satellite.initialAngle + angle) * Math.PI / 180
                    const eccentricity = Math.sqrt(1 - Math.pow(ellipseData.ry / ellipseData.rx, 2))
                    const ellipseRadiusAtSelectedPoint = ellipseData.ry / Math.sqrt(1 - Math.pow(eccentricity * Math.cos(angleInRadians), 2))

                    const posX = ellipseData.cx + ellipseRadiusAtSelectedPoint * Math.cos(angleInRadians) - satelliteRadius
                    const posY = ellipseData.cy + ellipseRadiusAtSelectedPoint * Math.sin(angleInRadians) - satelliteRadius

                    newPositions[index] = { x: posX, y: posY }
                    return newPositions
                })
            }, 300)
        )

        return () => intervals.forEach(clearInterval)
    }, [ellipseData, satelliteRadius, angle, satellitesData])


    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prevAngle) => (prevAngle + 1) % 360)
        }, 300)

        return () => clearInterval(interval)
    }, [])


    return (
        <>
            {satellitesData.map((satellite, index) => (
                <motion.img
                    key={index}
                    className='section-orbit__satellite ${satellite.className}'
                    src={satellite.img}
                    alt={satellite.alt}
                    animate={{
                        y: satellitePositions[index]?.y || 0,
                        x: satellitePositions[index]?.x || 0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                />
            ))}
        </>
    );
}

export default Satellites