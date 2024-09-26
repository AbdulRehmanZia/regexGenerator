import React from "react";

const OutputSection = ({ regex, testString }) => {
  const testRegex = new RegExp(regex);
  const matches = testString.match(testRegex);

  // Function to copy regex to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(regex)
      .then(() => alert("Regex copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-black">
      <h2 className="text-xl font-bold mb-4">Your Regex</h2>
      <p className="text-lg mb-4">
        <strong>Pattern:</strong> {regex || "No pattern generated yet"}
      </p>

      {/* Copy button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={copyToClipboard}
        disabled={!regex}
      >
        Copy Regex
      </button>
    </div>
  );
};

export default OutputSection;
