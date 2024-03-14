import { questions } from "../questions.json";

export const Answers = ({ result }) => {
  console.log("Result", result);
  return (
    <>
      <h2>Your answers</h2>
      <ul className="result">
        {questions.map(question => {
          return (
            <li key={question.id}>
              <span>{question.question}</span> {result[question.id]}
            </li>
          );
        })}
      </ul>
    </>
  );
};
