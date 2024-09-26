import React, { useState, useEffect } from "react";

const InputSection = ({ onRegexChange }) => {
  const [useDigits, setUseDigits] = useState(false);
  const [useLetters, setUseLetters] = useState(false);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [customPattern, setCustomPattern] = useState("");
  const [finalPattern, setFinalPattern] = useState("");

  // Build the regex pattern dynamically based on user input
  useEffect(() => {
    let pattern = "^"; // Start anchor

    if (useDigits) pattern += "(?=.*\\d)"; // Include at least one digit
    if (useLetters) pattern += "(?=.*[a-zA-Z])"; // Include at least one letter (a-z, A-Z)
    if (useSpecialChars) pattern += "(?=.*[\\W_])"; // Include at least one special character (non-word char)

    // Add the custom regex part, if provided
    pattern += customPattern;

    // Enforce allowed characters at the end (you can customize this part based on needs)
    pattern += "[a-zA-Z\\d\\W_]*$";

    // Update final pattern
    setFinalPattern(pattern);

    // Notify parent component
    onRegexChange(pattern);
  }, [useDigits, useLetters, useSpecialChars, customPattern, onRegexChange]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-black">
      <h2 className="text-xl font-bold mb-4">Build Your Regex</h2>

      {/* Digits checkbox */}
      <label className="block mb-2 ">
        <input
          className="mr-3"
          type="checkbox"
          checked={useDigits}
          onChange={(e) => setUseDigits(e.target.checked)}
        />
        Include Digits (0-9)
      </label>

      {/* Letters checkbox */}
      <label className="block mb-2">
        <input
          className="mr-3"
          type="checkbox"
          checked={useLetters}
          onChange={(e) => setUseLetters(e.target.checked)}
        />
        Include Letters (a-z, A-Z)
      </label>

      {/* Special Characters checkbox */}
      <label className="block mb-2">
        <input
          className="mr-3"
          type="checkbox"
          checked={useSpecialChars}
          onChange={(e) => setUseSpecialChars(e.target.checked)}
        />
        Include Special Characters
      </label>

      {/* Custom Regex Pattern input */}
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

      {/* Display the generated pattern */}
      <div className="mt-4">
        <strong>Generated Regex Pattern:</strong>
        <pre className="bg-gray-100 p-2 rounded mt-2">{finalPattern}</pre>
      </div>
    </div>
  );
};

export default InputSection;
