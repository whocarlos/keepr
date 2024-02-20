import { useEffect, useRef, useState } from "react"
import { LabelsPopover } from "./LabelsPopover";

export function MorePopover({labels, setLabels, noteLabels}) {


    const [openLabelInput, setOpenLabelInput] = useState(false);
    const labelsPopoverRef = useRef(null);

    return (
        <>     {openLabelInput ?
            <div className="labels-popover" ref={labelsPopoverRef}> <LabelsPopover labels={labels} setLabels={setLabels} labelsPopoverRef={labelsPopoverRef} noteLabels={noteLabels} /> </div>
            :
            <div className="popover">
                <div className="popover-item" onClick={() => setOpenLabelInput(true)}>Add label</div>
                <div className="popover-item">Add drawing</div>
            </div>
        }
        </>
    )
}