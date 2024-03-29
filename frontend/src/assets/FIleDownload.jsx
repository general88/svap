import React from "react";
import { baseUrlServer } from "../utils/helper";

const FIleDownload = () => {
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

  //   const handleFileUpload = () => {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     axios
  //       .post("http://localhost:5000/upload", formData)
  //       .then((response) => {
  //         console.log(response.data.message);
  //         setFile(null);
  // Refresh the list of files
  //         axios
  //           .get("http://localhost:5000/files")
  //           .then((response) => setFiles(response.data.files))
  //           .catch((error) => console.error("Error fetching files:", error));
  //       })
  //       .catch((error) => console.error("Error uploading file:", error));
  //   };

  const handleFileDownload = (filename) => {
    window.open(`${baseUrlServer}/download/${filename}`, "_blank");
  };

  return (
    <div>
      <h1>File Download Portal</h1>

      <h2>Uploaded Files</h2>
      <ul>
        {files.map((filename, index) => (
          <li key={index}>
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

export default FIleDownload;
