import s from './Button.module.sass'
import {FC} from "react";

type TButton = {
	action: (data?:any)=>void
	title: string
  active?: boolean
}
const Button: FC<TButton> = ({active=true,action,title}) => {
  return (
    <button onClick={action} className={`${s.Button} ${active && s.active}`}>
			{title}
    </button>
  );
};

export default Button;