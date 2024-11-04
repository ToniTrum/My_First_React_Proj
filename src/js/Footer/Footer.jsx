import '../../css/Footer.css'
import reactLogo from '../../img/react-logo.svg'
import sourcesData from './sourcesData.js'


const Footer = () => {
    return (
        <footer>
            <div className='footer-title'>
                <img className='footer-title__logo' src={reactLogo} alt="React logo" />
                <h3 className='footer-title__text'>My First React Project</h3>
            </div>

            <div className='footer-description'>
                <p>
                    Это является моим первым сайтом, сделанным с помощью популярного фреймворка React. 
                    Эта работа является эксперементальным и создана с целью изучения возможностей 
                    известного фреймворка и получения зачёта в университете, а также не носит коммерческих 
                    целей.
                </p>
            </div>

            <div className='footer-sources'>
                {sourcesData.map((item, index) => (
                    <div key={index}>
                        <img
                        className='footer-sources__logo'
                        style={{
                            height: `${item.height}vw`
                        }}
                        src={item.img}
                        alt={item.alt} />
                        <h3 className='footer-sources__text'>
                            <a target='_blank' href={item.href}>{item.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer