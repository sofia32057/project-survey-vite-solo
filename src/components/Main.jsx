import { Answers } from "./Answers";
import { Form } from "./Form";
import { useState } from "react";

export const Main = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [result, setResult] = useState()

  const handleForm = (answers) => {
    setIsSubmitted(true);
    return setResult(answers);
  };

  return (
    <main>
      {isSubmitted ? <Answers result={result}/> : <Form eventHandler={handleForm}/>}
    </main>
  );
};
