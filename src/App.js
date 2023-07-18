import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Registrations } from "./Components/Registration";
import AboutMe from "./Components/AboutMe";
import { PageNotFound } from "./Components/PageNotFound";
//import { ChakraBaseProvider } from "@chakra-ui/react";
//import { Cards } from "./Components/Cards/Cards";
import { ChakraUIGrid } from "./Components/ChakaUITesting/ChakraUIGrid";

function App() {
  return (

    <div className="App h-[100vh]">
      <nav>
        <Navigation />
      </nav>
      <div>
        <Routes>
          <Route path={"/"} element={<ChakraUIGrid />} />
          <Route path={"AboutMe"} element={<AboutMe />} />
          <Route path={"/footer"} element={<Footer />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/ContactMe"} element={<Registrations />} />
          <Route path={"/*"} element={<PageNotFound />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
