import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export function CheckSession({children}){
    const session = useAuth();

    if(session === null){
        return children;
    }

    return <Navigate to='/' />;
}