import css from "./Dialog.module.css"
import {DialogItem} from "./DialogItem.jsx"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

export const DialogTo = () => {
    const {msId}=useParams();
    const state = useSelector(state => state.chats)
    let MESSAGES_ARR = []
    state.getDialogArr(Number(msId)).messages.map(mes => MESSAGES_ARR.push(state.getMessage(mes)))
     // [{id,logo,name,content,time,date,sendUser}{}{}...]
    return (
        <>
            <div className={css.dialog_list}>
                <ul>
                    {MESSAGES_ARR.map(m => <DialogItem sendUser={m.sendUser} logo={m.logo} name={m.name} content={m.content}/>)}
                </ul>
            </div>
            <div className={css.dialog_input}>
                <textarea typeof="text" placeholder="Write..."/>
                <div className={css.dialog_input_interface}>
                    <img src={process.env.PUBLIC_URL + '/img/sendMassage.svg'} alt={"sendMassage"}/>
                </div>
            </div>
        </>
    )
}