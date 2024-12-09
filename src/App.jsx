const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

import { useState } from "react";
import "./App.css";
function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <div>
      <button
        className="absolute top-[16px] right-[16px] border-none bg-none text-[40px] hover:text-blue-600 hover:scale-125 transition-all ease-in-out"
        onClick={() => setisOpen(!isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div>
          <div className="flex justify-center mt-40">
            <div className="h-80 w-96 bg-slate-200 rounded-lg shadow-sm">
              <div className="flex flex-row text-center justify-evenly mt-4">
                <div
                  className={`w-7 h-7 text-white rounded-full ${
                    step == 1 ? "bg-indigo-600" : "bg-gray-400"
                  }`}
                >
                  1
                </div>
                <div
                  className={`w-7 h-7 text-white rounded-full ${
                    step == 2 ? "bg-indigo-600" : "bg-gray-400"
                  }`}
                >
                  2
                </div>
                <div
                  className={`w-7 h-7 text-white rounded-full ${
                    step == 3 ? "bg-indigo-600" : "bg-gray-400"
                  }`}
                >
                  3
                </div>
              </div>
              <p className="text-center mt-10">
                Step {step}:{messages[step - 1]}
              </p>
              <div className="flex justify-evenly mt-16">
                <button
                  className="w-24 h-7 rounded-full bg-indigo-600 text-white  transition-transform transform hover:scale-125 duration-300 ease-in-out hover:bg-indigo-950"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  className="w-24 h-7 rounded-full bg-indigo-600 text-white hover:ease-in-out duration-300 transition-all hover:scale-125 hover:bg-indigo-950"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
