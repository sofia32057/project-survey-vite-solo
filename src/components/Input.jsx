import PropTypes from "prop-types";
import { Fragment } from "react";

export const Input = ({ q }) => {
  const { id, type, question, options, answer: userAnswer } = q;
  console.log("Question", q);

  return (
    <label>
      {question}
      {type === "select" ? (
        <select name={id}>
          <option
            disabled
            selected
            value="">
            Select
          </option>
          {options.map((op, i) => {
            return <option key={i}>{op}</option>;
          })}
        </select>
      ) : (
        <Fragment>
          {options.length > 0 ? (
            <fieldset name={id}>
              {options.map((op, i) => {
                return (
                  <Fragment key={i}>
                    <label>
                      <input
                      
                        type={type}
                        name={id}
                      />{" "}
                      {op}
                    </label>
                  </Fragment>
                );
              })}
            </fieldset>
          ) : (
            <input
              type={type}
              name={id}
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
