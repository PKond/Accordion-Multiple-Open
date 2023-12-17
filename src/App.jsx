import Questions from "./Questions";
import { useState } from "react";
import data from "./data";

const App = () => {
  console.log(data);
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
