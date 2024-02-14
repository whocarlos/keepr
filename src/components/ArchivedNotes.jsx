
import { useLoaderData, useOutletContext } from "react-router-dom"
import  supabase  from "../supabase"
import { Note } from "./Note"
import  Masonry  from "react-masonry-css";


export async function archivedNotesLoader() {
    const { data, error } = await supabase.from('notes').select().eq('archived', true);
    return data
}

export default function ArchivedNotes() {
    const archivedNotes = useLoaderData();
    console.log(archivedNotes);
    const { isMenuOpen } = useOutletContext();

    return (
        <Masonry
        breakpointCols={isMenuOpen ? 3 : 4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={isMenuOpen ? { paddingLeft: '13rem' } : null}>


        {archivedNotes.map((note) => { 
            return <Note note={note} key={note.id}/>
        })}
    </Masonry>
    )
}