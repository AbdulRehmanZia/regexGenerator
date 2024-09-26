import React, { useState, useEffect } from "react";

const InputSection = ({ onRegexChange }) => {
  const [useDigits, setUseDigits] = useState(false);
  const [useLetters, setUseLetters] = useState(false);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [customPattern, setCustomPattern] = useState("");
  const [finalPattern, setFinalPattern] = useState("");

  useEffect(() => {
    let pattern = "^"; 

    if (useDigits) pattern += "(?=.*\\d)"; 
    if (useLetters) pattern += "(?=.*[a-zA-Z])"; 
    if (useSpecialChars) pattern += "(?=.*[\\W_])"; 

    pattern += customPattern;

    pattern += "[a-zA-Z\\d\\W_]*$";

    setFinalPattern(pattern);

    onRegexChange(pattern);
  }, [useDigits, useLetters, useSpecialChars, customPattern, onRegexChange]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-black">
      <h2 className="text-xl font-bold mb-4">Build Your Regex</h2>

      <label className="block mb-2 ">
        <input
          className="mr-3"
          type="checkbox"
          checked={useDigits}
          onChange={(e) => setUseDigits(e.target.checked)}
        />
        Include Digits (0-9)
      </label>

      <label className="block mb-2">
        <input
          className="mr-3"
          type="checkbox"
          checked={useLetters}
          onChange={(e) => setUseLetters(e.target.checked)}
        />
        Include Letters (a-z, A-Z)
      </label>

      <label className="block mb-2">
        <input
          className="mr-3"
          type="checkbox"
          checked={useSpecialChars}
          onChange={(e) => setUseSpecialChars(e.target.checked)}
        />
        Include Special Characters
      </label>

      <label className="block mb-2">
        <input
          type="text"
          value={customPattern}
          placeholder="Add custom regex pattern"
          className="border p-2 rounded w-2/12 mr-3"
          onChange={(e) => setCustomPattern(e.target.value)}
        />
        Custom Pattern (optional)
      </label>

      <div className="mt-4">
        <strong>Generated Regex Pattern:</strong>
        <pre className="bg-gray-100 p-2 rounded mt-2">{finalPattern}</pre>
      </div>
    </div>
  );
};

export default InputSection;
