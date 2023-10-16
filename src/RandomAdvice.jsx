import React, { useState, useEffect } from "react";

const RandomAdvice = () => {
  const [advice, setAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    changeAdvice();
  }, []);

  const adviceFetch = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("https://api.adviceslip.com/advice");
      const response = await data.json();
      console.log(response.slip);
      setAdvice(response.slip.advice);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeAdvice = () => {
    adviceFetch();
  };

  return (
    <div className="App">
      <div key={advice.id} className="advice-slip">
        <h1 style={{ fontSize: "18px" }}> {advice}</h1>

        <button onClick={changeAdvice} disabled={isLoading} className="btn">
          Give me an Advice
        </button>
      </div>
    </div>
  );
};

export default RandomAdvice;
