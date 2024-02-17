import { Form, useLoaderData, useNavigate, useOutletContext, useSubmit } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import supabase from "../supabase";
import { NoteTitleInput } from "./NoteTitleInput";
import { TextInput } from "./TextInput";
import { NoteSettings } from "./NoteSettings";
import NoteLabels from "./NoteLabels";

export async function noteModalAction({ request, params }) {
    const { id } = params;
    const formData = await request.formData();
    const keys = Array.from(formData.keys());

    

    
    if(keys.length > 1 || keys[0] === 'image-0'){
        for(const key of keys){
            const value = formData.get(key);

            const {data, error} = await supabase.storage.from('images').upload(`/${value.name}`, value);

            if(error){
                console.log(error);
            }

            
            const result = await supabase.from('notes').update([{image_url}])
        }

        return null
    }

    let key = keys[0];
    let value = formData.get(key);

    if(key === 'label'){
        console.log('label in action', value);
        const {data,error} = await supabase.from('notes_labels').insert({note_id: id, label_id: value});
        if (error) {
            console.log(error);
        }
        return null
    }
     

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
    
    if(error) {
        console.log(error);
    }

    const {data: labels, error: labelsError} = await supabase.from('labels').select();

    if(labelsError) console.log(labelsError);


    let { data: noteLabels, error: noteLabelsError } =  await supabase
        .rpc('get_labels_for_note', {

            'note_id_param': id
        })

        console.log('noteLabels', noteLabels);

    if(noteLabelsError) console.log(noteLabelsError);
   

    const loaderData = {
        note: data[0],
        labels,
        noteLabels
    }
    return loaderData;
}


export function NoteModal() {
    const {labels, setLabels} = useOutletContext();
    console.log(labels);
    let {note,  noteLabels} = useLoaderData();

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
        console.log(e.target.id);

    if(e.target.name === 'label'){
        submit(
            { 'label': e.target.id },
            {
                method: "post",
                encType: "application/x-www-form-urlencoded",
                action: `/notes/${note.id}`
            }
        )
    }

        if(e.target.name === 'images'){
            console.log('got them images?');
            console.log(e.target.files);

            let formData = new FormData();

            for(let i = 0; i < e.target.files.length; i++){
                formData.append(`image-${i}`, e.target.files[i], e.target.files[i].name);
            }

        
            //console.log(Array.from(formData.keys())[0]);
           // const images = formData.get('images[]');
            //console.log(images);

            submit(
                formData,
                {
                    method: "post",
                    encType: "multipart/form-data",
                    action: `/notes/${note.id}`
                }
            )
            
        }
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
                ref={formRef}
                encType="multipart/form-data" >
                    <NoteTitleInput title={note.title} bookmarked={note.bookmarked} />
                    <TextInput content={note.content}   />

                    {noteLabels && <NoteLabels labels={noteLabels} /> }

                    <NoteSettings bgColor={bgColor} 
                    isModal={true} 
                    dialogRef={dialogRef} 
                    labels={labels}
                    setLabels = {setLabels} /> 
                </Form>
            </div>
        </dialog>
    )
}