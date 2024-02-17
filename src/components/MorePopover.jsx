import { useEffect, useState } from "react"
import { LabelsPopover } from "./LabelsPopover";

export function MorePopover({labels}) {


    const [openLabelInput, setOpenLabelInput] = useState(false);
    return (
        <div className="popover">
            {
                openLabelInput ?
                    <LabelsPopover labels={labels} /> :
                    <>
                        <div className="popover-item" onClick={() => setOpenLabelInput(true)}>Add label</div>
                        <div className="popover-item">Add drawing</div>
                    </>
            }

        </div>
    )
}