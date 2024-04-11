export default function Question({ question, onAnswerClick }) {
    return (
      <div className="question">
        <div className="questionText">{question.questionText}</div>
        <div className="answers">
          {question.answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(answer.score)}>
              {answer.answerText}
            </button>
          ))}
        </div>
      </div>
    );
}    