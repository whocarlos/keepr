export function TextInput({content}){
    return(
        <div contentEditable='true' 
        suppressContentEditableWarning={true}
        className="editor">
            {content}
        </div>
    )
}