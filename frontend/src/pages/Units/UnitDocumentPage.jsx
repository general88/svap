import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { baseUrlServer } from "../../utils/helper";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { FileExclamationOutlined } from "@ant-design/icons";
import DocumentCard from "./DocumentCard";

const UnitDocumentPage = () => {
  const { routename } = useParams();

  const { getUnitDocuments, data, loading } = useFetch();

  React.useEffect(() => {
    getUnitDocuments(`${baseUrlServer}/api/v1/document/${routename}`);
  }, []);

  if (loading) {
    return <div>Loading documents...</div>;
  }

  if (data?.length <= 0 || data === null) {
    return (
      <div className="grid place-items-center h-[calc(100vh-100px)]">
        <div className="shadow-md rounded-md p-8 text-center">
          <FileExclamationOutlined
            style={{
              fontSize: "5rem",
              color: "red",
            }}
          />
          <p className="font-medium text-xl py-4">
            No document upload for {routename} Unit
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <section className="p-4 mx-auto max-w-6xl">
        <h1 className="uppercase my-10">Unit {routename}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((doc) => {
            return <DocumentCard key={doc._id} {...doc} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default UnitDocumentPage;
