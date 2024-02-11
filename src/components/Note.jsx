import { Form, Link } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { useState } from "react"

export function Note({ title, content, note }) {

    return (

        <>
            <Link key={note.id} to={`/notes/${note.id}`}>
                <div className="form-container"
                    style={{ backgroundColor: note.bg_color, border: note.bg_color !== '#202124' ? 'none' : '1px solid white' }}
                >
                    <Form method="post" action="/"
                        style={{
                            backgroundImage: `url(${note.bg_img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }
                        } >
                        <NoteTitleInput title={note.title} />
                        {/* <NoteContentInput forwardedRef={forwardedRef}  content={content}/> */}
                        <div className="note-content-input">
                            {note.content}
                        </div>
                        <NoteSettings />
                    </Form>
                </div >
            </Link>


        </>
    )
}