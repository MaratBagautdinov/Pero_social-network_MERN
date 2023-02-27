import s from './UsersExplorer.module.sass'
import {FC} from "react";
import UsersExplorerList from "@/widgets/UsersExplorer";

type TUsersExplorer = {}
const UsersExplorer: FC<TUsersExplorer> = ({}) => {
    return (
        <div className={s.UsersExplorer}>
            <h2>Все пользователи</h2>
            <UsersExplorerList/>
        </div>
    );
};

export default UsersExplorer;