// import { type PropsWithChildren, type ReactNode } from 'react' 
// FOR CHILDREN

// import { type FC } from 'react'

// type GoalProps = PropsWithChildren<{ title: string }>

interface GoalProps {
  title: string;
  description: string;
}

// const Goal: FC<GoalProps> = ({ title, description }) => {
const Goal = ({ title, description }: GoalProps) => {
  return (
    <div className='border-2 flex justify-between p-2 items-center hover:border-cyan-400 duration-300'>
      <div className='flex flex-col text-left'>
        <div className='text-xl fond-bold'>{title}</div>
        <div>{description}</div>
      </div>
      <div className='flex gap-2'>
        <button className='hover:text-cyan-400 duration-300'>Finished</button>
        <button className='hover:text-red-500 duration-300'>Delete</button>
      </div>
    </div>
  )
}

export default Goal