// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDataContext } from "../context/Datacontext";
// import axios from "axios";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import "./Upload.css";
// const API_URL = "http://127.0.0.1:8000/app/task/";

// const Upload = () => {
//   const [dragging, setDragging] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [fileName, setFileName] = useState("");
//   const [Insights, setInsights] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { setData } = useDataContext();

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(false);
//     const droppedFiles = [...e.dataTransfer.files];
//     setFiles(droppedFiles);
//     setFileName(droppedFiles[0].name);
//   };

//   const onChangeHandler = (e) => {
//     const selectedFiles = [...e.target.files];
//     setFiles(selectedFiles);
//     setFileName(selectedFiles[0].name);
//   };

//   const handleUpload = async () => {
//     if (files.length === 0) {
//       setError("Please select a file.");
//       return;
//     }
//     const file = files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet);

//       // Trim keys and values and convert everything to string format
//       const trimmedData = parsedData.map((entry) => {
//         const trimmedEntry = {};
//         Object.entries(entry).forEach(([key, value]) => {
//           const trimmedKey = String(key).trim();
//           const trimmedValue =
//             typeof value === "string" ? String(value).trim() : String(value);
//           trimmedEntry[trimmedKey] = trimmedValue;
//         });
//         return trimmedEntry;
//       });

//       setInsights(trimmedData);
//     };
//     reader.readAsBinaryString(file);
//   };

//   const cancel = () => {
//     setFiles([]);
//     setFileName("");
//     setInsights([]);
//     setError("");
//   };

//   const view = async () => {
//     if (Insights.length === 0) {
//       setError("Please upload a file.");
//       return;
//     }
//     try {
//       const response = await axios.post(API_URL, Insights);
//       if (response.data) {
//         const getresponse = await axios.get(API_URL);
//         if (getresponse.data) {
//           setData(getresponse.data);
//           navigate("/home");
//         }
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       setError("An error occurred while uploading the file.");
//     }
//   };

//   return (
//     <div className="homepage-container">
//       <div
//         className={`upload-container ${dragging ? "dragging" : ""}`}
//         onDragEnter={handleDragEnter}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         <h1>Web Development Task</h1>
//         <label htmlFor="fileInput" className="upload-label">
//           <FaCloudUploadAlt
//             size={50}
//             color={dragging ? "#007bff" : "#999999"}
//           />
//           {dragging ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <h4>
//               {fileName
//                 ? fileName
//                 : "Drag & drop file here or click to select files"}
//             </h4>
//           )}
//           <input
//             id="fileInput"
//             type="file"
//             style={{ display: "none" }}
//             onChange={onChangeHandler}
//             multiple
//           />
//         </label>
//         <div>
//           {Insights.length === 0 && (
//             <button className="upload-button" onClick={handleUpload}>
//               Upload
//             </button>
//           )}
//           {Insights.length > 0 && (
//             <button className="upload-button" onClick={view}>
//               View
//             </button>
//           )}
//           <button
//             className="upload-button"
//             onClick={cancel}
//             disabled={files.length === 0}
//           >
//             Cancel
//           </button>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;
