const NavBar = () => {
  return (
    <div className="flex flex-rows px-2 py-2 items-center">
      <img
        src="/vite.svg"
        className="w-14 h-14 bg-white shadow-lg rounded-xl p-1"
      />
      <div className="ml-3 text-xl font-bold">Game Hub</div>
    </div>
  );
};

export default NavBar;
