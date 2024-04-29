import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSum } from "./hooks/useSum";
const App = () => {
  /**
   * The most naive way of approaching this problem
   
      const [first, setFirst] = useState("");
      const [second, setSecond] = useState("");
      const [sum, setSum] = useState("");

      useEffect(() => {
        try {
          setSum(parseInt(first) + parseInt(second));
        } catch (error) {
          setSum("");
        }
      }, [first, second]);
    
   */

  // But when we can extract this whole logic and make it a seperately new file to be used here, then why not? 🤔
  const { first, second, setFirst, setSecond, sum } = useSum();

  return (
    <div className="w-screen h-screen ">
      {/* Navbar div */}
      <div className="w-screen h-[7%]">
        <Navbar />
      </div>

      {/* Body */}
      <div className="w-screen h-[93%] bg-slate-400 dark:bg-slate-950 flex items-center justify-center">
        <input
          type="number"
          onInput={(e) => setFirst(e.target.value)}
          value={first}
        ></input>
        <h1 className="text-white text-3xl">+</h1>
        <input
          type="number"
          onInput={(e) => setSecond(e.target.value)}
          value={second}
        ></input>
        <h1 className="text-white text-3xl"> = </h1>
        <input disabled value={sum} className="text-white"></input>
      </div>
    </div>
  );
};

export default App;
