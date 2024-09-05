import React, { useState } from "react";

function NumberCreator() {
  const [random, setRandom] = useState(0);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleMin = (event) => {
    setMin(event.target.value);
  };
  const handleMax = (event) => {
    setMax(event.target.value);
  };

  const handleRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  };
  return (
    <div className="number-creator">
      <h3 className="random-number-h3">
        Random Number : <span className="random-number">{random}</span>
      </h3>

      <div className="min-max">
        <div className="min">
          <h3>Min:</h3>
          <input
            type="number"
            className="input"
            onChange={handleMin}
            value={min}
          />
        </div>
        <div className="max">
          <h3>Max:</h3>
          <h3>
            <input
              type="number"
              className="input"
              onChange={handleMax}
              value={max}
            />
          </h3>
        </div>
      </div>

      <div>
        <button className="random-create-button" onClick={handleRandom}>
          <h3>Get Random Number</h3>
        </button>
      </div>
    </div>
  );
}

export default NumberCreator;
