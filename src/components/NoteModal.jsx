import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import supabase from "../supabase";

export async function noteModalLoader({params}){
        const {id} = params;
        const {data, error} = await supabase.from('notes').select().eq('id', id);
        return data;
    }
export function NoteModal(){
    let note = useLoaderData();
    let navigate = useNavigate();
  
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
  
    return (
      <dialog ref={dialogRef}>
        <div>
          {JSON.stringify(note)}
        </div>
      </dialog>
    )
    
  }