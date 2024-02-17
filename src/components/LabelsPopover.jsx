import { useState } from "react"
import supabase from "../supabase";
import { useAuth } from "@/contexts/Auth";


export function LabelsPopover({labels, labelsPopoverRef, setLabels}) {

    const  session  = useAuth();
    //console.log(session.user.id);
    
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
        const {data, error} = await supabase.from('labels').insert({label_name: search , user_id: session.user.id}).select();
        console.log(data);

        if(error) console.log(error);

        setLabels([...labels, data[0]]);
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

        {
            isExactMatch ? null : <div id="create-label-from-popover" onClick={createLabel}>Create label "{search}" </div>
        }
        </>
    )
}