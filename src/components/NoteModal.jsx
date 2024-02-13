import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
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
    console.log(note.bg_color);

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

    return (
        <dialog ref={dialogRef} id="note-modal">
            <div style={{ backgroundColor: note.bg_color }}>
                <Form method="post" action={`/notes/${note.id}`}
                    onSubmit={handleSubmit}>
                    <NoteTitleInput title={note.title} />
                    <TextInput content={note.content} />
                    <NoteSettings bgColor={note.bg_color} isModal={true} />
                </Form>
            </div>
        </dialog>
    )
}