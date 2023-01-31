import css from "./DialogList.module.css"
import {DialogListItem} from "./DialogListItem.jsx";
import {useSelector} from "react-redux";

export const DialogList = () => {
    debugger
    const state = useSelector(state => state)
    const logIn = useSelector(state => state.logIn._logIn)
    let CHATS = []
    let myChats = state.getUser(Number(logIn)).dialogs // dialogId
    myChats.map(chat => {
        const dialog = {
            dialogId: null,
            name: "",
            logo: ""
        }
        const user = state.getDialogMembersArr(chat).find(user => {
            return user !== Number(logIn)
        })
        dialog.dialogId = chat
        dialog.name = state.getUser(user).name
        dialog.logo = state.getUser(user).logo
        return CHATS.push(dialog)
    })
    return (
        <div className={css.list}>
            <ul>
                {CHATS.map(d => <DialogListItem dialogId={d.dialogId} name={d.name} logo={d.logo}/>)}
            </ul>
        </div>
    )
}