import { Form, useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import supabase from "../supabase";
import { NoteTitleInput } from "./NoteTitleInput";
import { TextInput } from "./TextInput";
import { NoteSettings } from "./NoteSettings";

export async function noteModalAction({ request, params }) {
    const { id } = params;
    const formData = await request.formData();
    const key = Array.from(formData.keys())[0];

    const value = formData.get(key);
    console.log(
        key, value
    );

    const { data, error } = await supabase.from('notes').update({ [key]: value }).eq('id', id);
    
    if(error) {
        console.log(error);
    }

    console.log(data);

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
    let submit = useSubmit();


    const [bgColor, setBgColor] = useState(note.bg_color)
    const [bgImg, setBgImg] = useState(note.bg_img)

    const dialogRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal();

        dialogRef.current.addEventListener('click', (event) => {
            if (event.target === dialogRef.current) {
                dialogRef.current.close();
                navigate('/notes');
            }
        });
    }, []);

    function handleChange(e){
        console.log(e.target);


        if(e.target.name ==='archived'){
            submit(
                { 'archived': e.target.checked },
                {
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    action: `/notes/${note.id}`
                }
            )
        }

        if(e.target.name === 'title'){
            submit(
                { 'title': e.target.value },
                {
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    action: `/notes/${note.id}`
                }
            )
        }
        if(e.target.name === 'bookmark'){
            submit(
                { 'bookmarked': e.target.checked },
                {
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    action: `/notes/${note.id}`
                }
            )
        }
        if(e.target.name === 'bg_color'){
            setBgColor(e.target.value);
            submit(
                { 'bg_color': e.target.value },
                {
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    action: `/notes/${note.id}`
                }
            );
        }else if(e.target.name === 'bg-img'){
            setBgImg(e.target.value);
            submit(
                { 'bg_img': e.target.value },
                {
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    action: `/notes/${note.id}`
                }
            )
        }
    }

    return (
        <dialog ref={dialogRef} id="note-modal">
            <div style={{ backgroundColor: bgColor}} className="note-in-modal">
                <Form method="post" action={`/notes/${note.id}`} 
                onChange={handleChange} 
                style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                ref={formRef}>
                    <NoteTitleInput title={note.title} bookmarked={note.bookmarked} />
                    <TextInput content={note.content}   />
                    <NoteSettings bgColor={bgColor} isModal={true} dialogRef={dialogRef} /> 
                </Form>
            </div>
        </dialog>
    )
}