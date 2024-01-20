import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form } from "react-router-dom";
import './Home.css'
import { useState, useRef } from "react";
import { NoteTitleInput } from "../components/NoteTitleInput";
import { NoteContentInput } from "../components/NoteContentInput";

export async function createNoteAction({request}){
  let formData = await request.formData();
  console.log(formData);

  return null
}

function Home() {
  const session = useAuth();

 
  return (
    <div>
      <Navbar />
      <hr className="navbar-separation" />
      <div className="main">
        <div className="create-container">
          <div className='form-container'>
            <Form method="post" action="/">
              <NoteTitleInput />
              <NoteContentInput />
              <NoteSettings />

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;