import { Button } from "./Button";
import { questions } from "../questions.json";
import { useState } from "react";
import { Fragment } from "react";

export const Form = ({eventHandler}) => {
  const [answer, setAnswer] = useState({
    "superpower": "",
    "method": "Select",
    "lair": "Select", 
    "worlddom": "No",
    "svs": false
  });

  const answerString = answer ? "Yes" : "No";

  const handleChange = event => {
    const { name, value, type } = event.target
    const newAnswer = type === "checkbox" ? answerString : value
    setAnswer({...answer, [name]: newAnswer});
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();
    eventHandler(answer)
  };

  console.log("Questions", { questions });
  return (
    <form>
      {questions.map((q, i) => { 
        const { id, type, question, options } = q;
        return (
          <label key={id}>
            <span>{i + 1}</span>
            {// The questions as label
            question} 
            {type === "select" ? ( // If questions should be a 'select'
              <select
              required
                name={id}
                value={answer.id}
                onChange={handleChange}>
                <option
                  value="Select">
                  Select
                </option>
                {options.map((op) => { // Map and create options
                  return <option key={op} value={op}>{op}</option>;
                })}
              </select>
            ) : (
              <>
                {options.length > 0 ? ( // If questions should not be a select, but have more than one option
                  <fieldset name={id}>
                    {options.map((op, i) => { // Map options into their own inputs
                      return (
                        <Fragment key={i}>
                          <label>
                            <input
                              type={type}
                              name={id}
                              value={op}
                              onChange={handleChange}
                            /> {op}  
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
                    value={answer.id}
                    onChange={handleChange}
                  />
                )}
              </>
            )}
          </label>
        );
      })}
      <Button onClick={handleSubmit} />
    </form>
  );
};
