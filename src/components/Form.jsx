import { Button } from "./Button";
import { Input } from "./Input";
import { questions } from "../questions.json";

export const Form = () => {
  console.log("Questions", { questions });
  return (
    <form>
      {questions.map(question => {
        return <Input key={question.id} q={question} />;
      })}

      <Button />
    </form>
  );
};
