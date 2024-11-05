import '../../../css/Main/MainForAbout/SectionCard.css'
import personCardData from '../../../json/personCardData.json'

const MainForAbout = () => {
    return (
        <main>
            <h2 className='card-tytle'>O себе</h2>
            <section className="section-card">
                <ul className='section-card__list'>
                    {personCardData.info.map((item, index) => (
                        <li key={index}>
                            <span className='section-card__list__question'>{`${item.quation}: `}</span>{item.answer}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default MainForAbout