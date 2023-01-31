import {Link} from "react-router-dom";
import css from "./DialogList.module.css";

export const DialogListItem = (props) =>{
    return(
        <li>
            <Link to={"./"+props.dialogId} className={css.dlg_Item}>
                <div className={css.dlg_Item_img}>
                    <img src={process.env.PUBLIC_URL + '/img/'+props.logo} alt={props.name}/>
                </div>
                <div className={css.dlg_Item_name}>{props.name}</div>
            </Link>
        </li>
    )
}