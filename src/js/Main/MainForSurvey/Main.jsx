import SectionSurvey from './SectionSurvey';
import '../../../css/Main/Main.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';

const MainForSurvey = () => {
    const [questions, setQuestions] = useState({ questions: [] }); // Измените начальное состояние на объект

    useEffect(() => {
        $.ajax({
            url: 'http://localhost:5174/questions',
            method: 'GET',
            dataType: 'json',
            success: (data) => {
                setQuestions(data); // Установите объект с вопросами
            },
            error: (error) => {
                console.error("Ошибка при загрузке данных:", error);
            }
        });
    }, []);

    const handleClick = ({ questionIndex, answerIndex }) => {
        if (questions.questions.length > 0) {
            const updatedQuestions = {
                ...questions,
                questions: questions.questions.map((question, qIndex) => 
                    qIndex === questionIndex
                        ? {
                            ...question, 
                            totalNumberOfVotes: question.totalNumberOfVotes + 1,
                            answers: questions.questions[questionIndex].answers.map((answer, aIndex) => 
                                aIndex === answerIndex
                                    ? {
                                        ...answer, 
                                        numberOfVotes: answer.numberOfVotes + 1 
                                    }
                                    : answer
                            )
                        }
                        : question
                )
            }

            $.ajax({
                url: `http://localhost:5174/questions`,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(updatedQuestions),
                success: (data) => {
                    setQuestions(data)
                },
                error: (error) => {
                    console.error("Ошибка при обновлении данных:", error);
                }
            })
        }
    }


    return (
        <main>
            <h1 className='survey-title'>Опрос</h1>
            <SectionSurvey questions={questions} handleClick={handleClick} />
        </main>
    );
};

export default MainForSurvey;
