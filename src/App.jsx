import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    //0 === null => no son iguales = newActiveId = 0
    //serActiveId(0)
    //activeId = 0
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);

    //Mi solución
    /*     if (id !== activeId) {
      setActiveId(id);
    } else {
      setActiveId(null);
    } */
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
      <footer style={{ textAlign: 'center' }}>
        <a href="https://dudufcb.netlify.app/" target="">
          Trabajo realizado por Luis González | Volver Al Portafolio
        </a>
      </footer>
    </main>
  );
};
export default App;
