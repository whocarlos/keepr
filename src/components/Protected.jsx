import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export function Protected({children}){
    const session = useAuth();
    //console.log('hello from protected', session)

    if(session === null){
        return <Navigate to='/login' />
    }
    return children
}