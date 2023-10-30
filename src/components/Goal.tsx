// import { type PropsWithChildren, type ReactNode } from 'react' 
// FOR CHILDREN

// import { type FC } from 'react'

// type GoalProps = PropsWithChildren<{ title: string }>

interface GoalProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

// const Goal: FC<GoalProps> = ({ title, description }) => {
const Goal = ({ id, title, description, onDelete }: GoalProps) => {
  const deleteGoalHandler = () => {
    onDelete(id);
  }

  return (
    <div className='border-2 border-transparent flex justify-between p-2 items-center hover:border-cyan-700 duration-300 rounded-md bg-[#00121B]/50 shadow-md shadow-[#83fbff12]'>
      <div className='flex flex-col text-left'>
        <div className='text-xl font-bold text-slate-300'>{title}</div>
        <div className="text-slate-500">{description}</div>
      </div>
      <div className='flex gap-2 mr-2'>
        <button className='hover:text-cyan-400 duration-300 text-slate-300'>Finished</button>
        <button onClick={deleteGoalHandler} className='hover:text-red-500 duration-300 text-slate-300'>Delete</button>
      </div>
    </div>
  )
}

export default Goal