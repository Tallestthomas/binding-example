import { MouseEventHandler } from 'react';
interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
const Button = (props: ButtonProps ) => {
const { handleClick } = props ||  {};
  return(
    <button
      onClick={handleClick}
      >
      Click Me 
      </button>
  )
}

export default Button;
