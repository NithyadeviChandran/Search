import "./App.css";
import Header from "./Header";
import SearchBeratungstelle from "./SearchBeratungstelle";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <h1>Beratungsstelle Finder</h1>
      <SearchBeratungstelle />
      <Footer />
    </>
  );
}

export default App;
