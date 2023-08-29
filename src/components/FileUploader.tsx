import React, { ChangeEvent } from "react";

interface CustomFileUploaderProps {
  selectedFile: File | null;
  setSelectedFile: Function;
  label?: string;
}

const CustomFileUploader: React.FC<CustomFileUploaderProps> = ({
  selectedFile,
  setSelectedFile,
  label = "",
}) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div>
      {label && <p className="mb-2">{label}</p>}
      <input
        type="file"
        accept=".pdf, .jpg, .png"
        onChange={handleFileChange}
        className="bg-transparent text-gray-500 p-0"
      />
    </div>
  );
};

export default CustomFileUploader;
