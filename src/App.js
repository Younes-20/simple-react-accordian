import React, { useState } from 'react'
import Data from './Components/Data';
import Questions from './Components/Questions';


function App() {

  const [questions, setquestions] = useState(Data);
  console.log(questions)

  return (
    <div className="App">
      <main>
        <h2>Questions & Answers About React</h2>
        {questions.map(question => (
          <Questions key={question.id} {...question} />
        ))}
      </main>
    </div>
  );
}

export default App;
