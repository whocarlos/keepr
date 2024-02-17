export default function NoteLabels({labels}) {
    return (
        <div className="note-labels-container">
            {labels.map((label) => {
                return (
                    <label className="single-label">
                        {label.label_name}
                        <input type="checkbox" name="label" id={label.label_id} />
                        
                    </label>
                )
            })}
        </div>
    )
}