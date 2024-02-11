import { useAuth } from "../contexts/Auth";
import { Navbar } from "../components/Navbar";
import { NoteSettings } from "../components/NoteSettings";
import { Form, useLoaderData, useSubmit, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { DndContext } from "@dnd-kit/core";

export async function createNoteAction({ request }) {
  let formData = await request.formData();

  let content = formData.get("content");
  let contentHtml = formData.get("contentHtml");
  let title = formData.get('title');
  let bgColor = formData.get('bg-color');
  let bgImg = formData.get('bg-img');
  console.log(bgColor, bgImg, 'yooooo');



  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError);
  } else {
    console.log(session.session.user.id);
  }


  const { data, error } = await supabase.from('notes').insert([{ title: title, content: content, user_id: session.session.user.id, content_html: contentHtml, bg_color: bgColor, bg_img: bgImg }]);

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

  function rgbToHex(rgb) {
    // Remove the "rgb(" and ")" parts from the string
    const rgbValues = rgb.slice(4, -1).split(",");

    // Convert each RGB value to hex
    const hexValues = rgbValues.map(value => {
      const hex = Number(value).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    });

    // Combine the hex values into a single string
    const hex = "#" + hexValues.join("");

    return hex;
  }
  function handleSubmit(e) {
    e.preventDefault();

    const { target } = e;
    const parent = target.parentNode;
    // console.log(parent.style.backgroundColor);

    // console.log(target.style.backgroundImage);

    let bgImgUrl = target.style.backgroundImage;
    bgImgUrl = bgImgUrl.replace('url("', '').replace('")', '');
    //console.log(bgImgUrl);

    let bgColor = parent.style.backgroundColor;
    bgColor = rgbToHex(bgColor);

    console.log(bgColor, bgImgUrl);

    let noteContentText = contentRef.current.innerText;
    let noteContentHtml = contentRef.current.innerHTML
    const formData = new FormData(formRef.current);

    //console.log(formData);
    formData.append("content", noteContentText);
    formData.append("contentHtml", noteContentHtml);
    formData.append("bg-color", bgColor);
    formData.append("bg-img", bgImgUrl);


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
              <CreateNoteForm forwardedRef={contentRef} handleSubmit={handleSubmit} formRef={formRef} />
              :
              <div className="empty-form-container" onClick={showNote}>
                <CreateNote />
              </div>
            }



          </div>
          <Outlet />
          <Masonry
            breakpointCols={isMenuOpen ? 3 : 4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={isMenuOpen ? { paddingLeft: '13rem' } : null}>

           
            {notes.map((note) => {
              return <Note title={note.title} key={note.id} content={note.content} note={note} />
            })}
          </Masonry>

          {/* <div className="notes-container">
           
          </div> */}
        </div>



      </div>
    </div>
  )
}


export async function tempLoader({params}){
  let {id} = params;
  const { data, error } = await supabase.from('notes').select().eq('id', id);

  return data

}
export function Temp(){
  let note = useLoaderData();

  return (
    <div>
      {JSON.stringify(note)}
    </div>
  )
  
}

export default Home;