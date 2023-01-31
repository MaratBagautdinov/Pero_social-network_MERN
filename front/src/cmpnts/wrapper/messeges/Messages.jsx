import css from "./messeges.module.css"
import {DialogList} from "./DialogList/DialogList.jsx";
import {Dialog} from "./Dialog/Dialog.jsx";

export const Messages = () => {
    return (
        <div className={css.Messages}>
            <DialogList />
            {/*<Dialog />*/}
        </div>
    )
}