import styles from './Question.module.css'

export default function Question({ question, onAnswerClick }) {
    return (
      <>
      <div className={styles.questionContainer}>
        <div className={styles.questionInnerContainer}>
        <header className={styles.header}> Neighbourly</header>
        
        <div className={styles.questionText}>{question.questionText} </div>
        <div className={styles.answers}>
          {question.answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(answer.score)} className={styles.button}>
              <div className={styles.answerContentContainer}>
                <div className={styles.answerContent}>
                {answer.image}
                <p>{answer.answerText}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <footer className={styles.footer}>
        
        </footer>
        </div>
      </div>
      </>
    );
}      