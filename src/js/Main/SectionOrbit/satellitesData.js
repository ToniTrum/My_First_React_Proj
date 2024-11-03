import reactLogo from '../../../img/react-logo.svg'
import viteLogo from '../../../img/vite-logo.svg'
import javaScriptLogo from '../../../img/javascript-logo.png'
import framerMotionLogo from '../../../img/framer_motion-logo.svg'
import htmlLogo from '../../../img/html-logo.png'
import cssLogo from '../../../img/css-logo.png'


const satellitesData = [
    {
        "className": "react",
        "img": reactLogo,
        "alt": "React logo"
    },
    {
        "className": "vite",
        "img": viteLogo,
        "alt": "Vite logo"
    },
    {
        "className": "javascript",
        "img": javaScriptLogo,
        "alt": "JavaScript logo"
    },
    {
        "className": "framer_motion",
        "img": framerMotionLogo,
        "alt": "Framer Motion logo"
    },
    {
        "className": "html",
        "img": htmlLogo,
        "alt": "HTML logo"
    },
    {
        "className": "css",
        "img": cssLogo,
        "alt": "CSS logo"
    },
]

// Инициализация начального положения
for (let i = 0; i < satellitesData.length; i++) {
    const initialAngle = 360 / satellitesData.length * i
    satellitesData[i].initialAngle = initialAngle
}

export default satellitesData