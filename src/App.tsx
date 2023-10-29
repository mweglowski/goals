import { useState } from "react";

import Goal from "./components/Goal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/react.svg";

type Goal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  const addGoalHandler = (newGoal: Goal) => {
    setGoals((prevGoals: Array<Goal>) => {
      return { ...prevGoals, newGoal };
    });
  };

  return (
    <div className="flex justify-center">
      <div className="gradient"></div>
      <div className="w-full max-w-[600px] m-auto mt-6 hover:border-cyan-400 duration-300 flex flex-col">
        <Header image={{ src: goalsImg, alt: "List of goals" }}>
          <h1 className="font-bold text-3xl text-center custom-font">Goals</h1>
        </Header>

        {/* <button onClick={addGoalHandler} className=' text-cyan-400 font-bold py-3 px-16 mx-auto mt-11 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black duration-300 '>NEW</button> */}

        <div className="p-4 flex flex-col gap-2">
          <Goal
            title="TypeScript"
            description="React + TypeScript Maximilian Schwarzmueller"
          />
          <Goal
            title="Express"
            description="Learn REST API, creating server, manage requests"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
