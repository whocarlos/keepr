import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form, useLoaderData, useSubmit, Outlet, useLocation, useNavigate } from "react-router-dom";
import './Home.css'
import { useState, useRef, useEffect } from "react";
import { NoteTitleInput } from "../components/NoteTitleInput";
import { NoteContentInput } from "../components/NoteContentInput";

import supabase from "../supabase";
import { Note } from "../components/Note";
import { CreateNote } from "../components/CreateNote";
import { Menu } from "../components/Menu";
import { ClosedMenu } from "../components/ClosedMenu";

import Masonry from "react-masonry-css";
import { CreateNoteForm } from "../components/CreateNoteForm";

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

  // console.log(data);

  return data
}

function Home() {
  const notes = useLoaderData();
  // console.log('notes', notes); 
  const session = useAuth();
  let submit = useSubmit();

  const formRef = useRef(null);
  const contentRef = useRef(null);

  const [isNoteFormOpen, setIsNoteFormOpen] = useState(true); //temp

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const [isActive, setIsActive] = useState(false);


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

  function toggleMenu() {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div >
      {/* <Outlet />   */}
      <Navbar toggleMenu={toggleMenu} />
      <hr className="navbar-separation" />

      <div className="main">

        {
          isMenuOpen || isMenuHovered ?
            <Menu isMenuHovered={isMenuHovered}
              setIsMenuHovered={setIsMenuHovered}
              setIsActive={setIsActive}
              isActive={isActive}
            /> :
            <ClosedMenu setIsMenuHovered={setIsMenuHovered} isActive={isActive} />
        }


        <div id="content-container">
          <div className="create-container">
            {isNoteFormOpen
              ?
              // <Note forwardedRef={contentRef} handleSubmit={handleSubmit} formRef={formRef} />
              <CreateNoteForm forwardedRef={contentRef} handleSubmit={handleSubmit} formRef={formRef}/>
              :
              <div className="empty-form-container" onClick={showNote}>
                <CreateNote />
              </div>
            }



          </div>

          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {notes.map((note) => {
              return <Note title={note.title} key={note.id} content={note.content} />
            })}
          </Masonry>

          {/* <div className="notes-container">
           
          </div> */}
        </div>



      </div>
    </div>
  )
}

export default Home;