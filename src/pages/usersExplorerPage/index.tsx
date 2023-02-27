import s from './UsersExplorer.module.sass'
import {FC} from "react";
import UsersExplorerList from "@/widgets/UsersExplorer";
import LogoLink from '@/shared/LogoLink'

type TUsersExplorer = {}
const UsersExplorer: FC<TUsersExplorer> = ({}) => {
    return (
        <div className={s.UsersExplorer}>
            <h1>Все пользователи</h1>
            <div className={s.GOD}>
              <LogoLink id='63f77c35c7e4fe9ce74e8bca' logo='https://pero-social-network.storage.yandexcloud.net/logos/1e556a68-61bb-4dd2-8fa2-96921e17baa0.jpg' name='Создатель'/>
            </div>
            <UsersExplorerList/>
        </div>
    );
};

export default UsersExplorer;