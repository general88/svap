import React from "react";
import { useParams } from "react-router";

const DisplayAllDocuments = () => {
  const { routename } = useParams();
  return (
    <div>
      <h1>{routename}</h1>
    </div>
  );
};

export default DisplayAllDocuments;
