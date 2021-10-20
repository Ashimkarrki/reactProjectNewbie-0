import { React, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";
const Second = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandelers = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="suter">
      <div className="card">
        <h4 className="hfour">{data.title}</h4>

        {!isOpen ? (
          <RiAddCircleFill
            onClick={() => clickHandelers(data.id)}
            className="icons"
          />
        ) : (
          <AiFillMinusCircle
            onClick={() => clickHandelers(data.id)}
            className="icons"
          />
        )}
      </div>
      <div>{isOpen && <div className="no"> {data.info}</div>}</div>
    </div>
  );
};
export default Second;
