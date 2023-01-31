import {Profile} from "./Profile/Profile.jsx";
import {News} from "./News/News.jsx";
import {Messages} from "./messeges/Messages.jsx";
import {Peoples} from "./Peoples/Peoples.jsx";
import {Settings} from "./settings/Settings.jsx";
import {Route, Routes,Navigate} from "react-router-dom";
import {ExitContainer} from "./Exit/ExitContainer.jsx";

export const Wrapper = (props) => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={"profile/"+props.logIn} replace/>} />
            <Route path="profile/:id" element={<Profile/>} />
            <Route path="messages/*" element={<Messages/>}/>
            <Route path="news" element={<News/>}/>
            <Route path="peoples" element={<Peoples/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="exit" element={<ExitContainer/>}/>
        </Routes>)
}