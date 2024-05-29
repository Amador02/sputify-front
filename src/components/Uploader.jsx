import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    // Crear un objeto de tipo Blob para guardar el archivo
    const fileBlob = new Blob([selectedFile]);

    // Guardar el archivo localmente en el navegador
    const fileURL = URL.createObjectURL(fileBlob);

    // Crear un enlace temporal para descargar el archivo
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = selectedFile.name;
    downloadLink.click();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUploader;
