import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import.meta.env.VITE_API_KEY;

const App = () => {
  return (
    <div className="App">
      <Header />

      <MovieList />

      <Footer />
    </div>
  );
};

export default App;
