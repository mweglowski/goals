import { ReactNode } from 'react'

interface HeaderImageProps {
  src: string;
  alt: string;
}

type HeaderProps = {
  children: ReactNode;
  image: HeaderImageProps;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <div className='m-auto'>
      <img {...image} className='m-auto' />
      {children}
    </div>
  )
}



export default Header