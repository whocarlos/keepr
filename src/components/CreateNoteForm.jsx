import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
import { useState } from "react"
import { NoteListInput } from "./NoteListInput" 

export function CreateNoteForm({ forwardedRef, handleSubmit, formRef }) {
    const [isListInput, setIsListInput] = useState(false);
    const [bgColor, setBgColor] = useState('#202124'); 
    const [bgImg, setBgImg] = useState(null);

    //console.log(forwardedRef.current, 'hereeuu');

    function handleChange(e){
        //console.log(e.target.value, 'something changed?');
        //setBg(e.target.value)
        console.log(e.target.name);

        if(e.target.name === 'bg_color'){
            setBgColor(e.target.value);
        }else if(e.target.name === 'bg-img'){
            setBgImg(e.target.value);
        }
    }
    return (
        <div className="form-container" style={{backgroundColor: bgColor, border: bgColor !== '#202124' ? 'none': '1px solid white'}}>
            <Form method="post" action="/" 
            ref={formRef} 
            onSubmit={handleSubmit} 
            onChange={handleChange}
            style={{ backgroundImage: `url(${bgImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'}
                    }>  
                <NoteTitleInput /> 
                <NoteContentInput forwardedRef={forwardedRef} /> 
                <NoteSettings  bgColor={bgColor}/> 
            </Form> 
        </div>
    );
}
