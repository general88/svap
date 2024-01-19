import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrlServer } from "./utils/helper";

const File = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the list of uploaded files
    axios
      .get(`${baseUrlServer}/files`)
      .then((response) => setFiles(response.data.files))
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${baseUrlServer}/upload`, formData)
      .then((response) => {
        console.log(response.data.message);
        setFile(null);
        // Refresh the list of files
        axios
          .get(`${baseUrlServer}/files`)
          .then((response) => setFiles(response.data.files))
          .catch((error) => console.error("Error fetching files:", error));
      })
      .catch((error) => console.error("Error uploading file:", error));
  };

  const handleFileDownload = (filename) => {
    window.open(`${baseUrlServer}/download/${filename}`, "_blank");
  };

  return (
    <div>
      <h1>File Upload and Download</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      <h2>Uploaded Files</h2>
      <ul>
        {files.map((filename, index) => (
          <li key={index}>
            <img src=""/>
            {filename}
            <button onClick={() => handleFileDownload(filename)}>
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default File;
