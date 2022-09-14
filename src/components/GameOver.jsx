import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Welldone from '../img/welldone.svg'
import './GameOver.css'

const GameOver = () => {
    const [quizSate, dispatch] = useContext(QuizContext)
    console.log(quizSate);
  return (
    <div id='gameover'>
        <h2>Fim de Jogo</h2>
        <p>Pontuação: {quizSate.score}</p>
        <p>você acertou {quizSate.score} de {quizSate.questions.length} perguntas</p>
        <img src={Welldone} alt="Im do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver