import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";
export const Navbar = (props) => {
    const links = ['profile', 'messages', 'news', 'peoples', 'settings']
    return (
        <div className={css.Navbar}>
            <nav>
                <ul>
                    {links.map(title =>
                        <li key={title}><NavLink to={`/${title}/`+ (title === 'profile' ? props.logIn : '')}>
                            <img src={`/img/${title}.svg`} alt={`${title}`}/>
                            {title}
                        </NavLink></li>
                    )}
                 </ul>
            </nav>
            <div className={css.exit}>
                <li><NavLink to="/exit"><img src={process.env.PUBLIC_URL+'/img/exit.svg'} alt="exit"/>Exit</NavLink></li>
            </div>
        </div>
    )

}
