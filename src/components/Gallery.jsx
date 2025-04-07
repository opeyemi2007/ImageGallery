import { IoMdHeartEmpty } from "react-icons/io";
export default function Gallery({ images, onSelect, favorites, toggleFavorite }) {
    return (
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-item" onClick={() => onSelect(img)}>
            <img src={img.url} alt="gallery" className="gallery-img" loading="lazy" />
            <button
              className={`favorite-btn ${favorites.includes(img.id) ? "favorited" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering image selection
                toggleFavorite(img.id);
              }}
            >
              <IoMdHeartEmpty/>
            </button>
          </div>
        ))}
      </div>
    );
  }
  