import React, { useRef } from 'react';
import { NoteTextInput } from './NoteTextInput'; 

export function NoteContentInput({ forwardedRef, content }) {
  let noteRef = useRef();

  //console.log('the ref', forwardedRef.current);
  return (
    <div className="note-content-input">
      <NoteTextInput ref={noteRef} forwardedRef={forwardedRef} content={content} />
    </div> 
  )
}