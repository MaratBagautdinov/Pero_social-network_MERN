import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import store from "./model/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from "@/pages/ProfilePage";
import DialogsPage from "@/pages/DialogsPage";
import SettingsPage from "@/pages/SettingsPage";
import AuthPage from "@/pages/AuthPage";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
              <React.StrictMode>
                  <Layout>
                      <Routes>
                          <Route element={<ProfilePage/>} path='profile'/>
                          <Route element={<DialogsPage/>} path='dialogs'/>
                          <Route element={<SettingsPage/>} path='settings'/>
                          <Route element={<AuthPage/>} path='auth'/>
                      </Routes>
                  </Layout>
              </React.StrictMode>
        </BrowserRouter>
    </Provider>
)
