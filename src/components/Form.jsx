import { Button } from "./Button";
import { questions } from "../questions.json";
import { useState } from "react";
import { Fragment } from "react";

export const Form = () => {
  const [answer, setAnswer] = useState({
    "superpower": "",
    "method": "Select",
    "lair": "Select", 
    "worlddom": "No",
    "svs": false
  });
  // console.log("Question", q, test);
  console.log("Answer", answer);

  const handleChange = event => {
    console.log(event);
    const { name, value, type, checked } = event.target
    const newAnswer = type === "checkbox" ? answerString : value
    setAnswer({...answer, [name]: newAnswer});
    // storeState(event.target).answer = answer;
    // console.log("Answer", answer)
  };

  // const storeState = (target) => {
  //   return questions.find(q => q.id === target.name);
  // };

  const answerString = answer ? "Yes" : "No";

  // Event handler for form submission
  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    // Process the form data here
    console.log('Form Data:', answer)
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
                              value={op}
                              onChange={handleChange}
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
                    value={answer.id}
                    onChange={handleChange}
                  />
                )}
              </Fragment>
            )}
          </label>
        );
      })}

      <Button onClick={handleSubmit} />
    </form>
  );
};
