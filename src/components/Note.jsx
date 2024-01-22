import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
export function Note({forwardedRef, handleSubmit, formRef}) {
    return (
        <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit} >
            <NoteTitleInput />
            <NoteContentInput forwardedRef={forwardedRef} />  
            <NoteSettings />

        </Form>
    )
}