import React, { useState } from 'react';
import './css/body.css';
import handleDownload from './handleDownload';

export default function MainBody() {
  const [image, setImage] = useState(null);
  const [cartoonImage, setCartoonImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setCartoonImage(null);
      setError(null);
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setCartoonImage(imageUrl);
    } catch (err) {
      setError("Failed to upload or process the image.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containerBody">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="brand-name">Cartoonify<span style={{ color: '#ff6f61' }}>Me</span></h2>
          <h1>Turn Your<br />Photos Into<br />Cartoons</h1>
          <p>Experience the magic of AI by uploading a photo and getting a fun, cartoon version instantly.</p>
        </div>
      </div>

      <div className="upload-container">
        <form onSubmit={handleSubmit} className="upload-form">
            <input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input-hidden"
            />
            <label htmlFor="file-upload" className="custom-file-button">
                Choose Image
            </label>

            <button type="submit" className="upload-button" disabled={loading}>
                {loading ? "Processing..." : "Cartoonify"}
            </button>
        </form>


        {error && <p className="error-message">{error}</p>}

        {image && (
  <div className="image-preview-container">
    <div className="image-box">
      <h3>Input Image</h3>
      <img src={image} alt="Input" className="preview-image" />
    </div>

    <div className="image-box">
      <h3>Output Image</h3>
     {cartoonImage && (
  <div className="image-box image-output">
   
      <img src={cartoonImage} alt="Cartoonified Output" className="image" />
            <div style={{ marginTop: '5px' }}></div>

      <a href={cartoonImage} download="cartoonified-image.png" className="download-button">
        ⬇️ 
      </a>
    
  </div>
)}
    </div>
  </div>
)}





      </div>
    </div>
  );
}
