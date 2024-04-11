import styles from './Question.module.css'

export default function Question({ question, onAnswerClick }) {
    return (
      <div className={styles.questionContainer}>
        <div className={styles.questionText}>{question.questionText}</div>
        <div className={styles.answers}>
          {question.answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(answer.score)}>
              {answer.image}
              {answer.answerText}
            </button>
          ))}
        </div>
      </div>
    );
}      