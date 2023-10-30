import { useState } from "react";

import Goal from "./components/Goal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/react.svg";
import GoalList from "./components/GoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  const addGoalHandler = (newGoal: Goal) => {
    setGoals((prevGoals: Array<Goal>) => {
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="flex justify-center">
      <div className="gradient"></div>
      <div className="w-full max-w-[600px] m-auto mt-6 hover:border-cyan-400 duration-300 flex flex-col">
        <Header image={{ src: goalsImg, alt: "List of goals" }}>
          <h1 className="font-bold text-3xl text-center custom-font">Goals</h1>
        </Header>

        <NewGoal onAdd={addGoalHandler} />

        <GoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
      </div>
    </div>
  );
};

export default App;
