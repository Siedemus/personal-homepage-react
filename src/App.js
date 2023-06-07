import { ThemeProvider } from "styled-components";
import { Footer } from "./Features/Footer";
import { Hero } from "./Features/Hero";
import { Projects } from "./Features/Projects";
import { GlobalStyles } from "./Assets/styles/globalStyles";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./Features/Hero/Switch/switchSlice";
import { darkTheme, lightTheme } from "./Assets/styles/theme";
import { ProfileCustomizer } from "./Features/ProfileCustomizer";
import { skillset } from "./Assets/data/skillset";
import { technologies } from "./Assets/data/technologies";

function App() {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main>
        <Hero />
        <article>
          <ProfileCustomizer
            title={"My skillset includes 🛠️"}
            content={skillset}
          />
          <ProfileCustomizer
            title={"What I want to learn next 🚀"}
            content={technologies}
          />
        </article>
        <Projects />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
