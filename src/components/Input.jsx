import PropTypes from "prop-types";
import { Fragment } from "react";
import { useState } from "react";

export const Input = ({ q }) => {
  const [answer, setAnswer] = useState(q.answer);
  let { id, type, question, options, answer: defaultAnswer } = q;
  // console.log("Question", q, test);
  // console.log("Answer", answer);

  const handleChange = event => {
    console.log(event);
    const { value, type, checked } = event.target
    const newValue = checked ? checked : value
    setAnswer(newValue);
    console.log("Answer", answer)
  };

  return (
    <label>
      {question}
      {type === "select" ? ( // If questions should be a 'select'
        <select
          name={id}
          value={answer}
          onChange={handleChange}>
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
              value={answer}
              onChange={handleChange}
            />
          )}
        </Fragment>
      )}
    </label>
  );
};

Input.propTypes = {
  q: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  question: PropTypes.string,
  options: PropTypes.array,
};
