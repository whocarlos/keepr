export default function EditLabelsModal({editDialogRef}) {

    function createLabel(e){
        e.preventDefault();
        console.log('create label');
    }
    return(
        <dialog ref={editDialogRef} id="labels-modal">
                        <h1>Edit labels</h1>
                        <form onSubmit={e => console.log('rannnnnnning')}>
                            <input type="text" name="new-label" placeholder="Create label"  defaultValue='' />
                            <button onClick={createLabel}>create</button>
                        </form>
                    </dialog>
    )
}