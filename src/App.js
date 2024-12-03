import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";



import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience.jsx";
import About from "./components/about/About.jsx";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />

        <Portfolio />
        
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;
