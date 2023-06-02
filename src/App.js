import { Hero } from "./Features/Hero";
import { Projects } from "./Features/Projects";
import { Skillset } from "./Features/Skillset";
import { WantLearn } from "./Features/WantToLearn";

function App() {
  return (
    <main>
      <Hero />
      <article>
        <Skillset />
        <WantLearn />
      </article>
      <Projects />
    </main>
  );
}

export default App;
