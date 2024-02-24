import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="grid gap-8">
        <div>
          <NavBar />
        </div>
        <div>
          <div className="hidden sm:block">Aside</div>
          <div>Main</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
