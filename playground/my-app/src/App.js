//import React, { useState } from "react";

function App() {
  const reverseWord = (word) => {
    return word.split("").reverse().join("");
  };

  const palindrome = (word) => {
    if (word === reverseWord(word)) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  palindrome("racecar");

  return <div className="App">hello</div>;
}

export default App;
