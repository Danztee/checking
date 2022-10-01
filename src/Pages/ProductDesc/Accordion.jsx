import React from "react";
import { useState } from "react";
import "./ProductDesc.scss";

function Accordion(props) {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const openAccordionHandler = () => {
    setToggleAccordion((prev) => !prev);
  };

  return (
    <div style={props.style} className="accordion-body">
      <button className="accordion" onClick={openAccordionHandler}>
        {props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
      <div className="panel">
        {toggleAccordion && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim amet
            laboriosam nulla odio veritatis eius. Est doloremque nobis sequi a!
          </p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
