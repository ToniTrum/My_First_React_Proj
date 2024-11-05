import { useState } from 'react';
import { motion } from 'framer-motion';
import '../../../css/Main/MainForSurvey/SectionSurvey.css';

const SectionSurvey = ({ questions, handleClick }) => {
    const [ selectedAnswer, setSelectedAnswer ] = useState({})

    const handleSelectedAnswer = ({questionIndex, answerIndex}) => {
        setSelectedAnswer((prevSelectedAnswer) => ({
            ...prevSelectedAnswer,
            [questionIndex]: answerIndex
        }))
        // handleClick({ questionIndex, answerIndex })
    }

    const computeVotesPercent = ({questionIndex, answerIndex}) => {
        const totalNumberOfVotes = questions.questions[questionIndex].totalNumberOfVotes
        const answerNumberOfVotes = questions.questions[questionIndex].answers[answerIndex].numberOfVotes

        if (answerNumberOfVotes === 0) return 0

        const percent = answerNumberOfVotes / totalNumberOfVotes * 100
        return percent
    }

    const computeProgressBarWidth = ({questionIndex, answerIndex}) => {
        const percent = computeVotesPercent({questionIndex, answerIndex})
        const progressBarWidth = percent * 80 / 100
        return progressBarWidth
    }

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
                                onClick={() => handleSelectedAnswer({questionIndex, answerIndex})}
                                className={`section-survey__form__answer-list__answer__button ${
                                    selectedAnswer[questionIndex] == answerIndex
                                        ? "selected"
                                        : "usual-style"
                                }${
                                    selectedAnswer.hasOwnProperty(questionIndex) 
                                        ? "" : " hovered"
                                }`}
                                disabled={selectedAnswer.hasOwnProperty(questionIndex)} >
                                    {answer.answer}
                                </button>
                                {(selectedAnswer.hasOwnProperty(questionIndex)) && (
                                    <>
                                        <motion.div
                                        className="section-survey__form__answer-list__answer__progress"
                                        initial={{width: 0}}
                                        animate={{width: `${computeProgressBarWidth({questionIndex, answerIndex})}%`}}
                                        transition={{duration: 1}} />
                                        <h2 className='section-survey__form__answer-list__answer__percent'>
                                            {`${computeVotesPercent({questionIndex, answerIndex})}%`}
                                        </h2>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </form>
            ))}
        </section>
    )
}

export default SectionSurvey
