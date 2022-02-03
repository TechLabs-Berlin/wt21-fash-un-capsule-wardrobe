import axios from "axios";
import { useState } from "react";

export const useImageUpload = ({ apiURL }) => {
  const [imagePaths, setImagePaths] = useState([]);
  const [price, setPrice] = useState(0);
  const [vintedURL, setVintedURL] = useState("");
  const [vintedUsername, setVintedUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [dataAvailable, setDataAvailable] = useState(false); // wurden Daten abgerufen? sollen dem user eine Rückmeldung angezeigt werden?

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

    setImagePaths(response.data);
    console.log(response.data);
    console.log(imagePaths);

    setDataAvailable(true);
  };

  const resetData = () => {
    setDataAvailable(false);
  };

  return {
    resetData,
    handleImageUpload,
    dataAvailable,
    imagePaths,
    price,
    vintedURL,
    vintedUsername,
    isLoading,
    errorMassage,
  };
};
