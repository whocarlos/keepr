import { useState } from "react"

export function LabelsPopover({labels, labelsPopoverRef}) {
    
    const [innerLabels, setInnerLabels] = useState(labels);

    function handleLabelSearch(e){
        const searchValue = e.target.value;

        if(searchValue === ''){
            setInnerLabels(labels);
            labelsPopoverRef.current.style.height = '10rem !important';
            labelsPopoverRef.current.style.overflowY = 'scroll';
            return;
        }
        const filteredLabels = labels.filter((label) => {
            return label.label_name.toLowerCase().includes(searchValue.toLowerCase())
        })

       

        setInnerLabels(filteredLabels);
        labelsPopoverRef.current.style.height = 'auto !important';
        labelsPopoverRef.current.style.overflowY = 'hidden';
    }

    return (
        <>
        <div className="search-label-container">
        <p>Label note</p>
        <input type="search" name="exact-label" id="" placeholder="Search label" onInput={handleLabelSearch}/>
        </div>
        
        {innerLabels.map((label) => {
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