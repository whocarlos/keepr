export function LabelsPopover({labels}) {

    return (
        <>
        <p>Label note</p>
        <input type="search" name="exact-label" id="" placeholder="Search label"/>
        {labels.map((label) => {
            return (
                <label htmlFor="" className="label-checkbox" key={label.label_id}>
                    <input type="checkbox" name="label" id={label.label_id} />
                    <p>{label.label_name}</p>
                </label>
            )
        })}
        </>
    )
}