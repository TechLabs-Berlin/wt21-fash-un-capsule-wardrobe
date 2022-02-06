import axios from "axios";
import { useState } from "react";

export const useImageUpload = ({ apiURL }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [dataAvailable, setDataAvailable] = useState(false);

  const handleImageUpload = async (file) => {
    //prepare request / set loading / remove previous error message
    setIsLoading(true);
    setErrorMassage("");

    //upload file to server as multipart/form-data
    const formData = new FormData();
    formData.append("imagefile", file);

    const response = await axios.post(apiURL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResults(response.data);
    console.log(response.data);
    console.log(results);

    setDataAvailable(true);
  };

  const resetData = () => {
    setDataAvailable(false);
  };

  return {
    resetData,
    handleImageUpload,
    dataAvailable,
    results,
    isLoading,
    errorMassage,
  };
};
