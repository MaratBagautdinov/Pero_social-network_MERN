import s from './Navbar.module.sass'
import LinkIcon from "@/shared/LinkIcon";

const mainLinks = [
    {icon: '', title: 'profile'},
    {icon: '', title: 'dialogs'},
    {icon: '', title: 'settings'},
    {icon: '', title: 'auth'}

]
const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <nav>
                {mainLinks.map(l =>
                    <LinkIcon icon={l.icon} title={l.title} path={l.title}/>
                )}
            </nav>
        </div>
    )
}

export default Navbar;