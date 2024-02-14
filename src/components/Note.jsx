import { Form, Link } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { useState } from "react"

export function Note({ note }) {

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

                        {note.title.length > 0 && <NoteTitleInput title={note.title} bookmarked={note.bookmarked} isNoteDisplayed={true}/> }
                        <div className="note-content-input">
                            {note.content}
                        </div>
                    </Form>
                </div >
            </Link>


        </>
    )
}