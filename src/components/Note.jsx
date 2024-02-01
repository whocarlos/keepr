import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
export function Note({ forwardedRef, handleSubmit, formRef, title, content }) {
    console.log(title, content);
    return (
        <div className="form-container">
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit} >
                <NoteTitleInput title={title} /> 
                <NoteContentInput forwardedRef={forwardedRef}  content={content}/>
                <NoteSettings />
            </Form> 
        </div>

    )
}