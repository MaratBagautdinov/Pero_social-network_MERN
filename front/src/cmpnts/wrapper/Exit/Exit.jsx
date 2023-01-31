import css from "./Exit.module.css"
export const Exit = (props) =>{
    return(
        <div className={css.exit}>
            <h1>Who are you?</h1>
            <div className={css.form_log_in}>
                <input
                    type="text"
                    placeholder="login"
                    onChange={text=>props.setLogin(text.target.value)}
                />
                <button onClick={props.updateLogIn}>Go!</button>
            </div>
        </div>
    )
}