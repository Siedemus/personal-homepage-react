import { ThemeProvider } from "styled-components";
import { Footer } from "./Features/Footer";
import { Hero } from "./Features/Hero";
import { Projects } from "./Features/Projects";
import { Skillset } from "./Features/Skillset";
import { WantLearn } from "./Features/WantToLearn";
import { GlobalStyles } from "./Assets/globalStyles";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./Features/Hero/Switch/switchSlice";
import { darkTheme, lightTheme } from "./Assets/theme";

function App() {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main>
        <Hero />
        <article>
          <Skillset />
          <WantLearn />
        </article>
        <Projects />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
