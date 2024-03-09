import { Button } from "./Button";
import { questions } from "../questions.json";
import { useState } from "react";
import { Fragment } from "react";

export const Form = () => {
  const [answer, setAnswer] = useState("");
  // console.log("Question", q, test);
  // console.log("Answer", answer);

  const handleInput = event => {
    console.log(event);
    const { value, type, checked } = event.target
    const newValue = checked ? checked : value
    setAnswer(newValue);
    storeState(event.target).answer = answer;
    // console.log("Answer", answer)
  };

  const storeState = (target) => {
    return questions.find(q => q.id === target.name);
  };

  console.log("Questions", { questions });
  return (
    <form>
      {questions.map(q => { 
        const { id, type, question, options, answer: defaultAnswer } = q;
        return (
          <label key={id}>
            {question}
            {type === "select" ? ( // If questions should be a 'select'
              <select
                name={id}
                value={answer}
                onChange={handleInput}>
                <option
                  disabled
                  // selected
                  value="">
                  Select
                </option>
                {options.map((op, i) => { // Map and create options
                  return <option key={i} value={op}>{op}</option>;
                })}
              </select>
            ) : (
              <Fragment>
                {options.length > 0 ? ( // If questions should not be a select, but have more than one option
                  <fieldset name={id}>
                    {options.map((op, i) => { // Map options into their own inputs
                      return (
                        <Fragment key={i}>
                          <label>
                            <input
                              type={type}
                              name={id}
                              value={answer}
                              onChange={handleInput}
                            />{" "}
                            {op}
                          </label>
                        </Fragment>
                      );
                    })}
                  </fieldset>
                ) : (
                  // If questions is a simple input
                  <input
                    type={type}
                    name={id}
                    value={answer}
                    onChange={handleInput}
                  />
                )}
              </Fragment>
            )}
          </label>
        );
      })}

      <Button />
      <p>Current state is {answer}</p>
      <ul>{questions.map((q, i) => <li key={i}>{q.answer}</li>)}</ul>
    </form>
  );
};
