export function MorePopover({setIsListInput, isListInput}){
    function toggleListInput(){
        setIsListInput(prev => !prev);
    }
    return(
        <div className="popover">
            <div className="popover-item">Add label</div>
            <div className="popover-item">Add drawing</div>
            <div className="popover-item" onClick={toggleListInput}>
                {
                    isListInput ? "Hide boxes" : "ShowBoxes"
                }
            </div>
        </div>
    )
}