import s from './DialogsPage.module.sass'
import {useParams} from "react-router-dom";

const DialogsPage = () => {
    const {id} = useParams()
    return (
        <div className={s.DialogsPage}>
            <h2>Dialogs</h2>
            <div>
                {id}
            </div>
        </div>
    );
};

export default DialogsPage;