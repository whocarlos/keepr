import supabase from "@/supabase";
import { Form } from "react-router-dom";



export default function EditLabelsModal({ editDialogRef, labels, setLabels }) {

    async function createLabel(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target);

        const newLabel = formData.get('new-label');
        console.log(newLabel);


        const { data: { user } } = await supabase.auth.getUser()

        const { data, error } = await supabase.from('labels').insert({ label_name: newLabel, user_id: user.id }).select();

        if(error){
            console.log(error);
            return null;
        }

        console.log(data);
        setLabels([...labels, data[0]]);
    }
    return (
        <dialog ref={editDialogRef} id="labels-dialog">
            <h1>Edit labels</h1>
            <form onSubmit={createLabel}>
                <input type="text" name="new-label" placeholder="Create label" defaultValue='' />
                <button >create</button>
            </form>

            {labels.map((label) => {
                return (
                    <div key={label.id}>
                        <p>{label.label_name}</p>
                    </div>
                )
            })}

        </dialog>
    )
}