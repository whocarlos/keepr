import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import './Home.css'

function Home(){
    const session = useAuth();
    console.log(session.user)
    return (
        <div>
        <Navbar />



            <div className="main">
                <h1>SUp</h1>
                
            </div>
        </div>
    )
}

export default Home;