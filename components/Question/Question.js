import styles from './Question.module.css'
import Hind from 'next/font/google'

export default function Question({ question, onAnswerClick }) {
    return (
      <>
      <div className={styles.questionContainer}>
        <div className={styles.questionInnerContainer}>
        
        <div className={styles.questionText}>{question.questionText} </div>
        <div className={styles.answers}>
          {question.answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(answer.score)} className={styles.button}>
              <div className={styles.answerContentContainer}>
                <div className={styles.answerContent}>
                {answer.image}
                {answer.answerText}
                </div>
              </div>
            </button>
          ))}
        </div>
        </div>
      </div>
      </>
    );
}      