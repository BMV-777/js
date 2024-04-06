import React from "react";

const AccordionItem = ({ num, title, onOpen, curOpen, children }) => {
  const isOpen = num === curOpen;
  // const [isOpen, setOpen] = useState(false);

  function handelToggle() {
    onOpen(isOpen ? null : num);
    // setOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : " +"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
