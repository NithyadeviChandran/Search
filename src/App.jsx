import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Pflegepfad from "./Plegepfad";
import Slidepage from "./Slidepage";
import Pflegegrad from "./Pflegegrad";
import Footer from "./Footer";
// import Pathway from 'Pathway'


function App() {
  return (
    <>
      <Header />

      <Routes>
      {/* <Route path="/" element={<Pathway />} /> */}
      <Route path="/" element={<Pflegepfad />} />
        <Route path="/Pflegegrad" element={<Pflegegrad />} />
        <Route path="/slidepage" element={<Slidepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
