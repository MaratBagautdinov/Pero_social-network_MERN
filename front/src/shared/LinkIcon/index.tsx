import s from './LinkIcon.module.sass'
import {FC} from "react";
import {Link} from "react-router-dom";

type TLinkIcon = {
    icon: string
    title: string
    path: string
}
const LinkIcon: FC<TLinkIcon> = ({icon,title,path}) => {
    return (
        <span className={s.LinkIcon}>
            <img src={`assets/icons/${icon || 'icon-48x48.png'}`} alt={title}/>
            <Link to={path} key={title}>{title}</Link>
        </span>
    );
};

export default LinkIcon;