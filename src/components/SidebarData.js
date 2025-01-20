import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function SidebarData() {
  const [activeSection, setActiveSection] = useState("dropzone"); // Default to "dropzone"
  const [url, setUrl] = useState("");

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Arial', sans-serif",
        maxWidth: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          onClick={() => setActiveSection("url")}
          style={{
            background: activeSection === "url" ? "#4CAF50" : "#2196F3",
            color: "#fff",
            border: "none",
            padding: "12px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s",
          }}
        >
          Enter URL
        </button>
        <button
          onClick={() => setActiveSection("dropzone")}
          style={{
            background: activeSection === "dropzone" ? "#4CAF50" : "#2196F3",
            color: "#fff",
            border: "none",
            padding: "12px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s",
          }}
        >
          Upload File
        </button>
      </div>

      {activeSection === "url" && (
        <div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              padding: "20px",
              height: "150px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Label for the input field */}
            <input
              id="urlInput"
              type="text"
              value={url}
              onChange={handleUrlChange}
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px", // Align text inside input to left
              }}
            />
          </div>
        </div>
      )}

      {/* Dropzone Section */}
      {activeSection === "dropzone" && (
        <div
          {...getRootProps()}
          style={{
            marginTop: "20px",
            backgroundColor: "#fff",
            padding: "12px",
            height: "150px",
            width: "100%",
            border: "2px dashed #2196F3",
            borderRadius: "10px",
            textAlign: "center", // Horizontally center text
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            display: "flex", // Use flexbox to center content
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
            flexDirection: "column", // Stack children vertically
          }}
        >
          <input {...getInputProps()} />
          <p style={{ color: "#555", fontSize: "16px" }}>
            Drag and drop files here, or click to select files
          </p>
          {acceptedFiles.length > 0 && (
            <ul style={{ marginTop: "10px", color: "#333" }}>
              {acceptedFiles.map((file) => (
                <li key={file.path}>{file.path}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button
        onClick={() => console.log("Submit button clicked")}
        style={{
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          marginLeft: "70px",
          padding: "12px 10px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background 0.3s",
          marginTop: "20px",
        }}
      >
        Submit
      </button>
    </div>
  );
}
