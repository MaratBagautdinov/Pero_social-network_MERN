import css from "./Dialog.module.css"
import {DialogTo} from "./DialogTo.jsx";
import { Routes, Route} from 'react-router-dom';
export const Dialog = () => {
    return (
            <div className={css.dialog}>
                <Routes>
                    <Route exact path={":msId"} element={<DialogTo />}/>
                </Routes>
            </div>
    )
}