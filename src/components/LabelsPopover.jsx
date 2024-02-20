import { useState, useRef } from "react"
import supabase from "../supabase";
import { useAuth } from "@/contexts/Auth";
import { useParams, useSubmit } from "react-router-dom";


export function LabelsPopover({labels, labelsPopoverRef, setLabels, noteLabels}) {
    const { id } = useParams();
    const submit = useSubmit();
    //console.log(noteLabels);
    const  session  = useAuth();
    //console.log(session.user.id);

    const searchRef = useRef(null);
    
    const [innerLabels, setInnerLabels] = useState(labels);
    const [isExactMatch, setIsExactMatch] = useState(true);
    const [search, setSearch] = useState('');

    function handleLabelSearch(e){
        const searchValue = e.target.value;
        setSearch(searchValue);
        if(searchValue === ''){
            setInnerLabels(labels);
            setIsExactMatch(true);
            labelsPopoverRef.current.style.height = '10rem !important';
            labelsPopoverRef.current.style.overflowY = 'scroll';
            return;
        }

        const filteredLabels = labels.filter((label) => {
            return label.label_name.toLowerCase().includes(searchValue.toLowerCase())
        })

        const exactMatch = labels.filter((label) => {
            if(label.label_name.toLowerCase() === searchValue.toLowerCase()){
                setIsExactMatch(true);
            }else{
                setIsExactMatch(false);
            }
        })

       

        setInnerLabels(filteredLabels);
        labelsPopoverRef.current.style.height = 'auto !important';
        labelsPopoverRef.current.style.overflowY = 'hidden';

    }

    async function createLabel(){
        

        // Create the label
        const {data, error} = await supabase.from('labels').insert({label_name: search , user_id: session.user.id}).select();
        //console.log(data);

        if(error) console.log(error);
        console.log(data);
        //setLabels(labels)
       setLabels([...labels, data[0]]);
       console.log(labels);

        // Add the label to the note

        //Here I use submit so that react router revalidates(?) the labels associated with this note
        // submit(
        //     {
        //         label: data[0].label_id
        //     },
        //     {
        //         method: "post",
        //         encType: "application/x-www-form-urlencoded",
        //         action: `/notes/${id}`
        //     }
        // )

        // console.log(labels, 'labels after the fact');

        //     setInnerLabels(labels);
        //     setIsExactMatch(true);
        //     labelsPopoverRef.current.style.height = '10rem !important';
        //     labelsPopoverRef.current.style.overflowY = 'scroll';
        //     searchRef.current.value = '';
            
    }

    return (
        <>
        <div className="search-label-container">
        <p>Label note</p>
        <input type="search" name="exact-label" id="" placeholder="Search label" onInput={handleLabelSearch} ref={searchRef}/>
        </div>
        
        {innerLabels.map((label) => {
            const isChecked = noteLabels.some(noteLabel => noteLabel.label_id === label.label_id);
            return (
                <label htmlFor="" className="label-checkbox" key={label.label_id}>
                    <input type="checkbox" name="label" id={label.label_id}  defaultChecked={isChecked}/>
                    <p>{label.label_name}</p>
                </label>
            )
        })}

        {
            isExactMatch ? null : <div id="create-label-from-popover" onClick={createLabel}>Create label "{search}" </div>
        }
        </>
    )
}