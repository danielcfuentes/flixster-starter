import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import.meta.env.VITE_API_KEY;

const App = () => {
  return (
    <div className="App">
      <section id="container">
        <header id="AppHeader">
          <Header />
        </header>
        <body id="AppBody">
          <MovieList />
        </body>
      </section>

      <footer id="AppFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
