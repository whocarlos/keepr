import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import './Home.css'
import { useState, useRef } from "react";
import { NoteTitleInput } from "../components/NoteTitleInput";
import { NoteContentInput } from "../components/NoteContentInput";

import supabase from "../supabase";
import { Note } from "../components/Note";
import { CreateNote } from "../components/CreateNote";
import { Menu } from "../components/Menu";

export async function createNoteAction({ request }) {
  let formData = await request.formData();

  let content = formData.get("content");
  let contentHtml = formData.get("contentHtml");
  let title = formData.get('title');
  //console.log(title, content); 


  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError);
  } else {
    console.log(session.session.user.id);
  }


  const { data, error } = await supabase.from('notes').insert([{ title: title, content: content, user_id: session.session.user.id, content_html: contentHtml }]);

  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }

  return null
}

export async function homeLoader() {
  const { data, error } = await supabase.from('notes').select();

  if (error) console.log(error);

  console.log(data);

  return data
}

function Home() {
  const notes = useLoaderData();
  console.log('notes', notes);
  const session = useAuth();
  let submit = useSubmit();

  const formRef = useRef(null);
  const contentRef = useRef(null);

  const [isNoteFormOpen, setIsNoteFormOpen] = useState(true); //temp

  function handleSubmit(e) {
    e.preventDefault();

    console.log(contentRef.current);

    let noteContentText = contentRef.current.innerText;
    let noteContentHtml = contentRef.current.innerHTML
    const formData = new FormData(formRef.current);

    formData.append("content", noteContentText);
    formData.append("contentHtml", noteContentHtml);


    submit(formData, { method: "post", action: '/' });
  }

  function showNote() {
    setIsNoteFormOpen(true)
  }


  return (
    <div>
      <Navbar />
      <hr className="navbar-separation" />

      <div className="main">

        <Menu />

        <div>
          <div className="create-container">
            {isNoteFormOpen
              ?
              <Note forwardedRef={contentRef} handleSubmit={handleSubmit} formRef={formRef} />
              :
              <div className="empty-form-container" onClick={showNote}>
                <CreateNote />
              </div>
            }



          </div>

          <div className="notes-container">
            {notes.map((note) => {
              return <Note title={note.title} key={note.id} content={note.content_html} />
            })}
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home;