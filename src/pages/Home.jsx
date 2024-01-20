import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form, useSubmit } from "react-router-dom";
import './Home.css'
import { useState, useRef } from "react";
import { NoteTitleInput } from "../components/NoteTitleInput";
import { NoteContentInput } from "../components/NoteContentInput";

import supabase from "../supabase";

export async function createNoteAction({ request }) {
  let formData = await request.formData();

  let content = formData.get("content");
  let title = formData.get('title');
  //console.log(title, content); 


  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError);
  }else {
    console.log(session.session.user.id);
  }


  const {data, error} = await supabase.from('notes').insert([{ title: title, content: content, user_id: session.session.user.id}]);

  if(error){
    console.log(error);
  }else {
    console.log(data);
  }

  return null
}

export async function homeLoader(){
  const {data, error} = await supabase.from('notes').select();

  if(error) console.log(error);

  console.log(data);

  return data
}

function Home() {
  const session = useAuth();
  let submit = useSubmit();

  const formRef = useRef(null);
  const contentRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    let noteContent = contentRef.current.innerText;
    const formData = new FormData(formRef.current);

    formData.append("content", noteContent);


    submit(formData, { method: "post", action: '/' });
  }


  return (
    <div>
      <Navbar />
      <hr className="navbar-separation" />
      <div className="main">
        <div className="create-container">
          <div className='form-container'>
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit} >
              <NoteTitleInput />
              <NoteContentInput forwardedRef={contentRef} />
              <NoteSettings />

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;