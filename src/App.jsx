import React, { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutpuSection";
import "./index.css";

const App = () => {
  const [regex, setRegex] = useState(""); 
  const [testString, setTestString] = useState(""); 

  const handleRegexChange = (newRegex) => {
    setRegex(newRegex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 text-white p-6">
      <Header />

      <div className="container mx-auto space-y-8">
        <InputSection onRegexChange={handleRegexChange} />

        <OutputSection regex={regex} testString={testString} />
      </div>
    </div>
  );
};

export default App;
