import s from './UsersExplorer.module.sass'
import {FC} from "react";
import UsersExplorerList from "@/widgets/UsersExplorer";

type TUsersExplorer = {}
const UsersExplorer: FC<TUsersExplorer> = ({}) => {
    return (
        <div className={s.UsersExplorer}>
            <UsersExplorerList/>
        </div>
    );
};

export default UsersExplorer;