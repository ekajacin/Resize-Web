import React from 'react';

const DownloadButton = ({ imageUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'foto.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Download Foto</button>
  );
};

export default DownloadButton;