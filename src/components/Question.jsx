import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option"

import './Question.css'

const Question = () => {
    const [quizSate, dispatch] = useContext(QuizContext)

    const currentQuestion = quizSate.questions[quizSate.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return (
        <div id="question">
            <p>Pergunta de {quizSate.currentQuestion + 1} de {quizSate.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option 
                    option={option} 
                    key={option} 
                    answer={currentQuestion.answer} 
                    selectOption={() => onSelectOption(option)}/>
                ))}
                
            </div>
            {quizSate.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
                Continuar
            </button>
            )}
        </div>
    )
}

export default Question