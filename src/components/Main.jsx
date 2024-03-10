import { Answers } from "./Answers";
import { Form } from "./Form";

export const Main = () => {
const isSubmitted = false;

  return (
    <main>
      <Form/>
      {isSubmitted && <Answers />}
    </main>
  );
};
