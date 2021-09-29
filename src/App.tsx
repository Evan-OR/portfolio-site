import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <ProjectDisplay />
    </div>
  );
}

export default App;
