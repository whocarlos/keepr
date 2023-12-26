import { useAuth } from "../contexts/Auth";
import './Home.css'

function Home(){
    const session = useAuth();
    console.log(session.user)
    return (
        <div>
            <h1>Home page</h1>
        </div>
    )
}

export default Home;