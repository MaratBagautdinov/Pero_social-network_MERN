import s from './Layout.module.sass'
import {Link} from "react-router-dom";
import {FC, ReactNode} from "react";
import Navbar from "@/widgets/Navbar";

type TLayout ={
    children : ReactNode
}
const Layout:FC<TLayout> = ({children}) => {
    return (
        <div className={s.Layout}>
            <Navbar/>
            <div className={s.main}>
                {children}
            </div>
        </div>
    );
};

export default Layout;