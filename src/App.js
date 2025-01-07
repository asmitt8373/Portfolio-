import "./index.css";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { About } from "./About";
import { Footer } from "./Footer";
import { Projects } from "./project";

function App() {
  return (
    <main className="max-w-[100vw] w-[100%] p-4">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
