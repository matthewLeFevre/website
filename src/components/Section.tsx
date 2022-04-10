import React from "react";

export default function Section({ title, children }) {
  return (
    <div className='section'>
      <div className='section__hook' id={title.value} />
      <div className='section__content'>
        <h2 className='section__title'>{title.key}</h2>
        {children}
      </div>
    </div>
  );
}
