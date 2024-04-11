import styles from './Question.module.css'

export default function Question({ question, onAnswerClick }) {
    return (
      <>
      <div className={styles.questionContainer}>
        <div className={styles.questionText}>{question.questionText}</div>
        <div className={styles.answers}>
          {question.answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(answer.score)}>
              <div className={styles.answerContent}>
                {answer.image}
                {answer.answerText}
              </div>
            </button>
          ))}
        </div>
      </div>
      </>
    );
}      