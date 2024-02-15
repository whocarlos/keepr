import { useContext, useRef, useState } from "react"
import { Outlet, useLoaderData, useOutletContext, useSubmit } from "react-router-dom";
import Masonry from "react-masonry-css";
import { Note } from "./Note";
import { CreateNote } from "./CreateNote";
import { CreateNoteForm } from "./CreateNoteForm";
import supabase from "../supabase";

export async function notesLoader() {
    // query supabase for the notes that are not archived

const { data, error } = await supabase.from('notes').select().eq('archived', false);


    if (error) console.log(error);

    // console.log(data);

    return data
}

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


export function Notes() {
    const notes = useLoaderData();
    let submit = useSubmit()
    const contentRef = useRef();
    const formRef = useRef();
    const { isMenuOpen } = useOutletContext();
    const [isNoteFormOpen, setIsNoteFormOpen] = useState(true); //temp

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

    return (
        <>
                    <Outlet />

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
            <Masonry
                breakpointCols={isMenuOpen ? 3 : 4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                style={isMenuOpen ? { paddingLeft: '13rem' } : null}>


                {notes.map((note) => { 
                    return <Note note={note} key={note.id}/>
                })}
            </Masonry>

        </>
    )
}   