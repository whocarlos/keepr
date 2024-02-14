import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import supabase from "../supabase";
import { NoteTitleInput } from "./NoteTitleInput";
import { TextInput } from "./TextInput";
import { NoteSettings } from "./NoteSettings";

export async function noteModalAction({ request, params }) {
    const { id } = params;
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const contentHtml = formData.get('contentHtml');
    const bgColor = formData.get('bg-color');
    const bgImg = formData.get('bg-img');
    const { data, error } = await supabase.from('notes').update({ title: title, content: content, content_html: contentHtml, bg_color: bgColor, bg_img: bgImg }).eq('id', id);
    if (error) console.log(error);
    console.log('updated', data);

    //console.log(data);

    return null
}
export async function noteModalLoader({ params }) {
    const { id } = params;
    const { data, error } = await supabase.from('notes').select().eq('id', id);
    return data;
}
export function NoteModal() {
    let note = useLoaderData()[0];
    let navigate = useNavigate();
    console.log(note.bg_color);

    const [bgColor, setBgColor] = useState(note.bg_color)
    const [bgImg, setBgImg] = useState(note.bg_img)

    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal();

        dialogRef.current.addEventListener('click', (event) => {
            if (event.target === dialogRef.current) {
                dialogRef.current.close();
                navigate('/notes');
            }
        });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const { target } = e;


        console.log(target.children[1].innerText);
        // const parent = target.parentNode;
        //const content = target
    }

    function handleChange(e){
        //console.log(e.target.value, 'something changed?');
        //setBg(e.target.value)
        console.log(e.target.name);

        if(e.target.name === 'bg-color'){
            setBgColor(e.target.value);
        }else if(e.target.name === 'bg-img'){
            setBgImg(e.target.value);
        }
    }

    return (
        <dialog ref={dialogRef} id="note-modal">
            <div style={{ backgroundColor: bgColor}} className="note-in-modal">
                <Form method="post" action={`/notes/${note.id}`} onChange={handleChange} style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    onSubmit={handleSubmit}>
                    <NoteTitleInput title={note.title} />
                    <TextInput content={note.content} />
                    <NoteSettings bgColor={bgColor} isModal={true} dialogRef={dialogRef} /> 
                </Form>
            </div>
        </dialog>
    )
}