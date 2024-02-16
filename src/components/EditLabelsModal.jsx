import supabase from "@/supabase";
import { Form } from "react-router-dom";



export default function EditLabelsModal({ editDialogRef }) {

    async function createLabel(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target);

        const newLabel = formData.get('new-label');
        console.log(newLabel);


        const { data: { user } } = await supabase.auth.getUser()

        const { data, error } = await supabase.from('labels').insert({ label_name: newLabel, user_id: user.id });

    }
    return (
        <dialog ref={editDialogRef} id="labels-dialog">
            <h1>Edit labels</h1>
            <form onSubmit={createLabel}>
                <input type="text" name="new-label" placeholder="Create label" defaultValue='' />
                <button >create</button>
            </form>


        </dialog>
    )
}