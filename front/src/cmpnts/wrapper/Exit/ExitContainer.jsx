import { useState} from "react";
import {UPDATE_LOG_IN} from "../../../../../../social-app/social-app/src/redax/logInReducer.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Exit} from "./Exit.jsx";
export const ExitContainer = () =>{
    debugger
    const [login, setLogin] = useState()
    let navigate = useNavigate()
    const dispatch = useDispatch()
    function updateLogIn (){
        dispatch(UPDATE_LOG_IN(login))
        navigate("/")
    }
    return(
        <Exit updateLogIn={updateLogIn} setLogin={setLogin}/>
    )
}