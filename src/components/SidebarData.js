import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

export default function SidebarData() {
  const [fileData, setFileData] = useState([]);
  console.log(fileData);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    onDrop: (files) => {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const csvData = Papa.parse(event.target.result, { header: false });
          setFileData(csvData.data);
        };
        reader.readAsText(file);
      }
    },
  });

  return (
    <>
      <div
        className="logo"
        style={{
          marginTop: "20px",
        }}
      >
        Ford
      </div>
      <div
        {...getRootProps()}
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          height: "50%",
          minHeight: "300px",
          border: "2px dashed #2196F3",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input {...getInputProps()} />
        <p style={{ color: "#555", fontSize: "20px", textAlign: "center" }}>
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

      {/* <div style={{ marginTop: "20px" }}>
        {fileData.length > 0 && (
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "10px",
              }}
            >
              <thead>
                <tr>
                  {fileData[0].map((header, index) => (
                    <th
                      key={index}
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        backgroundColor: "#f4f4f4",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fileData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={{
                          border: "1px solid #ccc",
                          padding: "8px",
                          textAlign: "left",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => console.log("Submit button clicked")}
          variant="success"
          style={{
            width: "50%",
            padding: "8px 10px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
