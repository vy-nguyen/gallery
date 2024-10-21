import './App.css';
import ImageCarousel from '../components/ImageCarousel';
import CardDefault from '../components/Card';
import AvatarExample from '../components/Avatar';

function App() {
  return (
    <div className="App">
      <CardDefault/>
      <AvatarExample/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;
