import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function DropFile(props) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: acceptedFiles => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const files = uploadedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DropFile;
