import { useAuth } from "../contexts/Auth";

function Home(){
    const session = useAuth();
    console.log(session.user)
    return (
        <>
        <h1>Sup</h1>
        <p>
            {JSON.stringify(session.user)};
        </p>
        </>
    )
}

export default Home;