import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="grid gap-8">
        <div>
          <NavBar />
        </div>
        <div className="flex flex-rows justify-between">
          <div className="hidden sm:block">Aside</div>
          <GameGrid />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
