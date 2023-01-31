import css from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props)=>{
    return(
        <li>
            <div className={css.dialog_item_logo}>
                <img src={process.env.PUBLIC_URL+'/img/'+props.logo} alt={props.name}/>
            </div>
            <div className={css.dialog_item_content}>
                <NavLink to={"/user/"+props.sendUser}>{props.name}</NavLink>
                <p>
                    {props.content}
                </p>
            </div>
        </li>
    )
}