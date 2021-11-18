import Annoucement from "./components/Annoucement";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer/Footer";
import Routes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Annoucement />
      <Navbar />

      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
