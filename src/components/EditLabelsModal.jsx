export default function EditLabelsModal({editDilogRef}){
    return(
        <dialog ref={editDilogRef}>
                        <h1>Edit labels</h1>
                        <form >
                            <input type="text" name="new-label" />
                            <button>create</button>
                        </form>
                    </dialog>
    )
}