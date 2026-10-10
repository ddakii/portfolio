import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Practice from "./components/Practice";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Practice />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
