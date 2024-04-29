import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="w-screen h-screen ">
      {/* Navbar div */}
      <div className="w-screen h-[7%] ">
        <Navbar />
      </div>

      {/* Body */}
      <div className="w-screen h-[93%] bg-slate-400 dark:bg-slate-950 "></div>
    </div>
  );
};

export default App;
