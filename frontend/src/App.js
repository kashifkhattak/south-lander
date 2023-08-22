import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SectionHeader from "./components/sectionheader";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SectionHeader
        header={"All-Inclusive"}
        subheader={"Vacation Packages"}
        description={
          "The 9 perfect destination categories to travel around Ecuador and get the most out of your time and money."
        }
      ></SectionHeader>
      <Footer></Footer>
    </>
  );
}

export default App;
