import { useEffect, useRef, useState } from "react"
import { LabelsPopover } from "./LabelsPopover";

export function MorePopover({labels}) {


    const [openLabelInput, setOpenLabelInput] = useState(false);
    const labelsPopoverRef = useRef(null);

    return (
        <>     {openLabelInput ?
            <div className="labels-popover" ref={labelsPopoverRef}> <LabelsPopover labels={labels} labelsPopoverRef={labelsPopoverRef} /> </div>
            :
            <div className="popover">
                <div className="popover-item" onClick={() => setOpenLabelInput(true)}>Add label</div>
                <div className="popover-item">Add drawing</div>
            </div>
        }
        </>
    )
}