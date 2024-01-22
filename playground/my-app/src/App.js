//import React, { useState } from "react";

function App() {
  const findVowels = (word) => {
    const vowels = ["a", "e", "i", "o", "u"];

    let result = [];
    let count = 0;

    for (let char of word) {
      if (vowels.includes(char)) {
        result.push(char);
        count++;
      }
      console.log(result);
      console.log(count);
    }
  };

  findVowels("likwazi");

  return <div className="App">hello</div>;
}

export default App;
