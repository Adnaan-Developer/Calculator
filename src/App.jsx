import { Box, Divide, Dot, Equal, Minus, Plus, X } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("0");
  const [symbol, setSymbol] = useState("");
  const [firstNumber, setfirstNumber] = useState("0");
  const [history, setHistory] = useState("");
  
  return (
    <div className="relative flex min-h-dvh md:min-h-svh justify-center items-center text-white bg-[url('/bg.jpg')] bg-cover bg-center ">
      <div className="bg-black/80 inset-0 absolute"></div>
      <div className="relative z-10 md:h-200 bg-[#222] md:p-10 md:w-150 p-4 rounded-xl text-5xl">
        <h2 className="font-bold md:text-6xl">Calculator</h2>
        <div className="md:h-50 md:w-130 w-80 rounded-xl flex flex-col justify-end p-4 overflow-auto scrollbar-none">
          <p
            style={{
              fontSize: `${Math.max(1.5, 4.5 - display.length * 0.15)}rem`,
            }}
            className="text-right text-gray-400 text-4xl"
          >
            {history}
          </p>
          <p
            style={{
              fontSize: `${Math.max(1.5, 4.5 - display.length * 0.15)}rem`,
            }}
            className="text-right text-white text-8xl my-2"
          >
            {display}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 md:text-5xl text-4xl font-bold">
          <button
            onClick={() => setDisplay(display * display * display)}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 flex justify-center items-center rounded-xl"
          >
            <Box size={44} strokeWidth={3} />
          </button>
          <button
            onClick={() => setDisplay(display * display)}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            Sqr
          </button>
          <button
            onClick={() => {
              setSymbol("");
              setfirstNumber("0");
              setDisplay("0");
              setHistory("");
            }}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            C
          </button>
          <button
            onClick={() => {
              setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
            }}
            className="bg-cyan-600 hover:bg-cyan-800 flex justify-center items-center cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <p className="rounded-full bg-white text-cyan-600">
              <X size={44} strokeWidth={3} />
            </p>
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "7" : display + "7")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            7
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "8" : display + "8")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            8
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "9" : display + "9")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            9
          </button>
          <button
            onClick={() => {
              setSymbol("+");
              setfirstNumber(display);
              setDisplay("0");
            }}
            className="bg-[#333] flex justify-center items-center hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <Plus size={44} strokeWidth={3} />
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "4" : display + "4")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            4
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "5" : display + "5")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            5
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "6" : display + "6")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            6
          </button>
          <button
            onClick={() => {
              setSymbol("-");
              setfirstNumber(display);
              setDisplay("0");
            }}
            className="bg-[#333] hover:bg-[#444] flex justify-center items-center cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <Minus size={44} strokeWidth={3} />
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "3" : display + "3")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            3
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "2" : display + "2")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            2
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "1" : display + "1")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            1
          </button>
          <button
            onClick={() => {
              setSymbol("X");
              setfirstNumber(display);
              setDisplay("0");
            }}
            className="bg-[#333] flex justify-center items-center hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <X size={44} strokeWidth={3} />
          </button>
          <button
            onClick={() => {
              if (!display.includes(".")) {
                setDisplay(display + ".");
              }
            }}
            className="bg-[#333] hover:bg-[#444] flex justify-center items-center cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <Dot size={44} strokeWidth={3} />
          </button>
          <button
            onClick={() => setDisplay(display === "0" ? "0" : display + "0")}
            className="bg-[#333] hover:bg-[#444] cursor-pointer py-2 md:py-4 rounded-xl"
          >
            0
          </button>
          <button
            onClick={() => {
              setSymbol("/");
              setfirstNumber(display);
              setDisplay("0");
            }}
            className="bg-[#333] hover:bg-[#444] flex justify-center items-center cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <Divide size={44} />
          </button>
          <button
            onClick={() => {
              if (symbol === "+") {
                let cal = Number(firstNumber) + Number(display);
                setHistory(`${firstNumber} + ${display} =`);
                setDisplay(cal);
              } else if (symbol === "-") {
                let cal = Number(firstNumber) - Number(display);
                setHistory(`${firstNumber} - ${display} =`);
                setDisplay(cal);
              } else if (symbol === "X") {
                let cal = Number(firstNumber) * Number(display);
                setHistory(`${firstNumber} X ${display} =`);
                setDisplay(cal);
              } else if (symbol === "/") {
                if (Number(display) === 0) {
                  setDisplay("Cannot divide by zero!");
                } else {
                  let cal = Number(firstNumber) / Number(display);
                  setHistory(`${firstNumber} / ${display} =`);
                  setDisplay(cal);
                }
              }
            }}
            className="bg-cyan-600 hover:bg-cyan-800 flex justify-center items-center cursor-pointer py-2 md:py-4 rounded-xl"
          >
            <Equal size={44} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
