import SectionSurvey from './SectionSurvey'
import '../../../css/Main/Main.css'
import { useEffect, useState } from 'react'
import $ from 'jquery'


const MainForSurvey = () => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        $.ajax({
            url: 'http://localhost:5174/questions',
            method: 'GET',
            dataType: 'json',
            success: (data) => {
                setQuestions(data)
            },
            error: (error) => {
              console.error("Ошибка при загрузке данных:", error)
            }
        })
    }, [])

    const handleClick = ({questionIndex, answerIndex}) => {
        if (questions) {
            const updatedQuestions = {
                ...questions[questionIndex],
                totalNumberOfVotes: questions[questionIndex].totalNumberOfVotes + 1,
                answers: questions[questionIndex].answers.map((answer, index) =>
                    index === answerIndex
                        ? { ...answer, numberOfVotes: answer.numberOfVotes + 1 }
                        : answer
                )
            };
    
            // Отправляем обновленные данные на сервер
            $.ajax({
                url: `http://localhost:5174/questions`,
                method: 'PUT', // Используем метод PUT для обновления
                contentType: 'application/json',
                data: JSON.stringify(updatedQuestions),
                success: (data) => {
                    setQuestions(data) // Обновляем локальное состояние после успешного обновления на сервере
                },
                error: (error) => {
                    console.error("Ошибка при обновлении данных:", error)
                }
            })
        }
    }

    return (
        <main>
            <h1 className='survey-title'>Опрос</h1>
            <SectionSurvey questions={questions} handleClick={handleClick} />
        </main>
    )
}

export default MainForSurvey