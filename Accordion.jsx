import React, { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItam";

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test1"
        num={23}
        key="test1"
      >
        <p>PlayList:</p>
        <ul>
          <li>Go to HTML</li>
          <li>Go to CSS</li>
          <li>Go to JavaScript</li>
          <li>Go to React</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
