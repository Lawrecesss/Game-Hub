import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="grid gap-8">
      <div>
        <NavBar />
      </div>
      <div>
        <div className="hidden sm:block">Aside</div>
        <div>Main</div>
      </div>
    </div>
  );
};

export default App;
