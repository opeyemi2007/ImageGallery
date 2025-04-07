export default function Lightbox({ image, onClose }) {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = image.url;
      link.download = `image-${image.id}.jpg`;
      link.click();
    };
  
    return (
      <div className="lightbox-overlay" onClick={onClose}>
        <div className="lightbox-container">
          <img src={image.url} alt="full view" className="lightbox-img" />
          <button className="download-btn" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    );
  }
  