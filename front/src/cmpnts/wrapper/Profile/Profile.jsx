import css from "./Profile.module.css"
import {useParams} from "react-router-dom";
import {ProfileItem} from "./ProfileItem.jsx";

export const Profile = () => {
    let {id} = useParams()
    return (
        <div className={css.Profile}>
            <ProfileItem id={id}/>
        </div>
    )
}