import './App.css'
import { useState } from "react";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";

// Sample image data
const images = [
  {
    id: 1,
    url: "https://source.unsplash.com/random/800x600?nature",
    category: "Nature",
  },
  {
    id: 2,
    url: "https://unsplash.com/photos/woman-poses-with-neon-lights-in-red-silhouette-_zfYXxFPFOY",
    category: "City",
  },
  {
    id: 3,
    url: "https://pin.it/66SEjePjS",
    category: "Anime",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/random/800x600?forest",
    category: "Nature",
  },
  {
    id: 5,
    url: "https://source.unsplash.com/random/800x600?japan",
    category: "City",
  },
  {
    id: 6,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 7,
    url: "https://source.unsplash.com/random/800x600?nature",
    category: "Nature",
  },
  {
    id: 8,
    url: "https://source.unsplash.com/random/800x600?city",
    category: "City",
  },
  {
    id: 9,
    url: "https://pin.it/66SEjePjS",
    category: "Anime",
  },
  {
    id: 10,
    url: "https://source.unsplash.com/random/800x600?forest",
    category: "Nature",
  },
  {
    id: 11,
    url: "https://source.unsplash.com/random/800x600?japan",
    category: "City",
  },
  {
    id: 12,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 13,
    url: "https://source.unsplash.com/random/800x600?nature",
    category: "Nature",
  },
  {
    id: 14,
    url: "https://source.unsplash.com/random/800x600?city",
    category: "City",
  },
  {
    id: 15,
    url: "https://pin.it/66SEjePjS",
    category: "Anime",
  },
  {
    id: 16,
    url: "https://source.unsplash.com/random/800x600?forest",
    category: "Nature",
  },
  {
    id: 17,
    url: "https://source.unsplash.com/random/800x600?japan",
    category: "City",
  },
  {
    id: 18,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 19,
    url: "https://source.unsplash.com/random/800x600?nature",
    category: "Nature",
  },
  {
    id: 20,
    url: "https://source.unsplash.com/random/800x600?city",
    category: "City",
  },
  {
    id: 13,
    url: "https://pin.it/66SEjePjS",
    category: "Anime",
  },
  {
    id: 14,
    url: "https://source.unsplash.com/random/800x600?forest",
    category: "Nature",
  },
  {
    id: 15,
    url: "https://source.unsplash.com/random/800x600?japan",
    category: "City",
  },
  {
    id: 16,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 17,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 18,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 19,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 20,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 21,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 22,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 23,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
  {
    id: 24,
    url: "https://source.unsplash.com/random/800x600?sky",
    category: "Nature",
  },
];

// Categories for filter
const categories = ["All", "Nature", "City", "Anime"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // Filter images based on category and search query
  const filteredImages = images.filter(
    (img) =>
      (img.category === selectedCategory || selectedCategory === "All") &&
      img.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (imageId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(imageId)
        ? prevFavorites.filter((id) => id !== imageId)
        : [...prevFavorites, imageId]
    );
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "app-container dark" : "app-container light"}>
      <h1 className="title">🔥 Sleek Image Gallery</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search images..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <button className="clear-filter-btn" onClick={() => setSelectedCategory("All")}>
        Clear Filter
      </button>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>

      <Gallery images={filteredImages} onSelect={setSelectedImage} favorites={favorites} toggleFavorite={toggleFavorite} />
      
      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}
