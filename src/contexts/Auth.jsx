import React, {useContext, useState, useEffect} from 'react'
import supabase from '../supabase'

const AuthContext = React.createContext();

export function AuthProvider({children}){
    const [session, setSession] = useState(null);   

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange((event, session) => {
            console.log('an auth event occured', event);
            if(event === 'SIGNED_OUT'){
                setSession(null);
            } else if(session){
                setSession(session);
            }
            
        });

        return () => {
            subscription.data.subscription.unsubscribe()
        }
    }, []);
    
    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth(){
    return useContext(AuthContext);
}