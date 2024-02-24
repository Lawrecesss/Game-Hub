import ThemeModeButton from "./ThemeModeButton";

const NavBar = () => {
  return (
    <div className="flex flex-rows justify-between p-2 items-center">
      <div className="flex flex-rows items-center">
        <img
          src="/vite.svg"
          className="w-14 h-14  shadow-md rounded-xl p-2 shadow-gray-800"
        />
        <div className="ml-3 text-xl font-bold">Game Hub</div>
      </div>
      <ThemeModeButton />
    </div>
  );
};

export default NavBar;
