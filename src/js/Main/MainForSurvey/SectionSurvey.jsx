import '../../../css/Main/MainForSurvey/SectionSurvey.css';

const SectionSurvey = ({ questions, handleClick }) => {
    return (
        <section className='section-survey'>
            {questions.questions.map((question, questionIndex) => (
                <form className='section-survey__form' key={questionIndex}>
                    <h2 className='section-survey__form__question'>{question.question}</h2>
                    <div className='section-survey__form__answer-list'>
                        {question.answers.map((answer, answerIndex) => (
                            <div className='section-survey__form__answer-list__answer' key={answerIndex}>
                                <button 
                                    type='button'
                                    onClick={() => handleClick({ questionIndex, answerIndex })}
                                    className='section-survey__form__answer-list__answer__button' >
                                    {answer.answer}
                                </button>
                                <div className='section-survey__form__answer-list__answer__progress'></div>
                            </div>
                        ))}
                    </div>
                </form>
            ))}
        </section>
    );
}

export default SectionSurvey;
