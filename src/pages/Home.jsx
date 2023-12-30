import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form } from "react-router-dom";
import './Home.css'
import { useState, useRef } from "react";
import { NoteTitleInput } from "../components/NoteTitleInput";


function Home(){
    const session = useAuth();
    console.log(session.user)

    // const[isCheck, setIscheck] = useState(false);

    // function testCheckbox(){
    //   console.log('u clicked the checkbox');
    //   setIscheck(!isCheck);
    // }

    const myRef = useRef(null);

    function handleInput(){
      console.log(myRef.current.innerHTML);
      console.log(myRef.current.innerText);
    }

    

    function handleKeyDow(e){
      console.log(e.code)
    }
    return (
        <div>
        <Navbar />

        <div className="main">
            <div className="create-container">
                <div className='form-container'>
                    <Form>
                      <NoteTitleInput />
                        <div  contentEditable='true' className="text-content" onInput={handleInput} ref={myRef} onKeyDown={handleKeyDow} plaintext-only='true'>

                        </div>
                        <NoteSettings />
                      
                    </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;