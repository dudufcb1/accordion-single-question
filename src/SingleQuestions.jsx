import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React, { useState } from 'react';
const SingleQuestions = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  // id=0 activeId=null = false
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <div
          className="question-btn"
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestions;
