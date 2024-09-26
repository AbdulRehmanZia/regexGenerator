import React, { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutpuSection";
import "./index.css";

const App = () => {
  const [regex, setRegex] = useState(""); // Holds the generated regex pattern
  const [testString, setTestString] = useState(""); // Holds the user input string for testing

  // Updates the regex pattern based on user input
  const handleRegexChange = (newRegex) => {
    setRegex(newRegex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 text-white p-6">
      <Header />

      <div className="container mx-auto space-y-8">
        {/* Input Section for regex components */}
        <InputSection onRegexChange={handleRegexChange} />

        {/* Output section for regex display and test results */}
        <OutputSection regex={regex} testString={testString} />
      </div>
    </div>
  );
};

export default App;
