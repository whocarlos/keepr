import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
export function Note({ forwardedRef, handleSubmit, formRef, title, content }) {
   // console.log(title, content);
   console.log(content);
    return (
        <div className="form-container">
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit} >  
                <NoteTitleInput title={title} /> 
                {/* <NoteContentInput forwardedRef={forwardedRef}  content={content}/> */}
                <div className="note-content-input">
                    {content}
                </div>
                <NoteSettings /> 
            </Form> 
        </div>

    )
}