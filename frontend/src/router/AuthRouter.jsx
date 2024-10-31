import { Route, Routes } from "react-router-dom";
import Login from './../pages/Login';
import Register from './../pages/Register';

export default function AuthRouter(){
    return(
        <Routes>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Register/>} path="/register"/>
        </Routes>
    )
}