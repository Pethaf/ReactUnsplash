import { Gallery } from "./Components/Gallery";
import { SearchForm } from "./Components/SearchForm";
import { ThemeToggle } from "./Components/ThemeToggle";
import { useState } from "react";
const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useState(false)
  const toggleTheme = () => {
    toggleDarkTheme(!isDarkTheme);
  }
  return (
    <main>
      <ThemeToggle toggleDarkTheme={toggleDarkTheme} isDarkTheme={isDarkTheme} />
      <SearchForm />
      <Gallery />
    </main>)
};
export default App;
