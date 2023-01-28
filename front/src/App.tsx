import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./store/user/userSlice";
import Posts from "./Posts";

function App() {
    const dispatch = useDispatch()
    const userId = "63d2c6d1a713fd078e50a3a8"
    // @ts-ignore
    const {user} = useSelector((state) => state.user)
    useEffect(() => {
        return () => {
            // @ts-ignore
            dispatch(getUser(userId))
        };
    }, [dispatch]);
    return (
        <div className="App">
            <Posts user={user}/>
        </div>
    );
}
export default App;
