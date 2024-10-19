import './App.css';

const images = [
      { src: "https://via.placeholder.com/300", alt: "Image 1" },
      { src: "https://via.placeholder.com/300", alt: "Image 2" },
      { src: "https://via.placeholder.com/300", alt: "Image 3" },
      { src: "https://via.placeholder.com/300", alt: "Image 4" },
      { src: "https://via.placeholder.com/300", alt: "Image 5" },
];

function gallery() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-auto" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {gallery()}
    </div>
  );
}

export default App;
