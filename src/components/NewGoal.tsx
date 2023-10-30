import { type FormEvent, useRef } from "react";
import { type Goal } from "../App";

type NewGoalProps = {
  onAdd: (goal: Goal) => void;
};

const NewGoal = ({ onAdd }: NewGoalProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null); // initial value in useRef in undefined, so we assigning it to null
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const addGoalHandler = () => {
    const title = titleInputRef.current!.value; // ! - this value will never be null, if it will be null, app will crush
    const description = descriptionInputRef.current!.value;

    if (!title || !description) return;

    const newGoal: Goal = {
      id: Math.random(),
      title,
      description,
    };

    onAdd(newGoal);
    titleInputRef.current!.value = "";
    descriptionInputRef.current!.value = "";
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col justify-center">
      <div className="flex flex-col gap-2 pt-5">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="new_goal_input"
          ref={titleInputRef}
        />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          className="new_goal_input"
          ref={descriptionInputRef}
        />
      </div>

      <button
        onClick={addGoalHandler}
        className="bg-[#00121B]/50 font-bold py-3 px-16 mt-4 mx-auto text-slate-300 border-2 border-transparent hover:border-cyan-700 hover:text-cyan-500 duration-300 rounded-md hover:shadow-md"
      >
        Add
      </button>
    </form>
  );
};

export default NewGoal;
