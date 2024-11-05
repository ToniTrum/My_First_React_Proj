import reactLogo from '../../../../img/react-logo.svg'
import viteLogo from '../../../../img/vite-logo.svg'
import javaScriptLogo from '../../../../img/javascript-logo.png'
import framerMotionLogo from '../../../../img/framer_motion-logo.svg'
import htmlLogo from '../../../../img/html-logo.png'
import cssLogo from '../../../../img/css-logo.png'
import jQueryLogo from '../../../../img/jquery-logo.svg'


const satellitesData = [
    {
        "className": "react",
        "img": reactLogo,
        "alt": "React logo",
        "href": "https://react.dev/"
    },
    {
        "className": "vite",
        "img": viteLogo,
        "alt": "Vite logo",
        "href": "https://vite.dev/"
    },
    {
        "className": "javascript",
        "img": javaScriptLogo,
        "alt": "JavaScript logo",
        "href": "https://www.javascript.com/"
    },
    {
        "className": "framer_motion",
        "img": framerMotionLogo,
        "alt": "Framer Motion logo",
        "href": "https://www.framer.com/"
    },
    {
        "className": "html",
        "img": htmlLogo,
        "alt": "HTML logo",
        "href": "https://html.com/"
    },
    {
        "className": "css",
        "img": cssLogo,
        "alt": "CSS logo",
        "href": "https://css3.com/"
    },
    {
        "className": "jquery",
        "img": jQueryLogo,
        "alt": "jQuery logo",
        "href": "https://jquery.com/"
    },
]

// Инициализация начального положения
for (let i = 0; i < satellitesData.length; i++) {
    const initialAngle = 360 / satellitesData.length * i
    satellitesData[i].initialAngle = initialAngle
}

export default satellitesData