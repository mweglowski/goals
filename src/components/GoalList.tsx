import Goal from "./Goal";

import { type Goal as GoalType } from "../App";

type GoalListProps = {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
};

const GoalList = ({ goals, onDeleteGoal }: GoalListProps) => {
  return (
    <ul className="p-4 flex flex-col gap-2">
      {goals.map((goal) => (
        <li className="list-none" key={goal.id}>
          <Goal {...goal} onDelete={onDeleteGoal}/>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
