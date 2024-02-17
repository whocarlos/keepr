import { useState } from "react"
import { MoreIcon } from "./icons/MoreIcon"
import { BackwardIcon } from "./icons/BackwardIcon"
import { ForwardIcon } from "./icons/ForwardIcon"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { ImageIcon } from "./icons/ImageIcon"
import { BackgroundIcon } from "./icons/BackgroundIcon"
import { InviteIcon } from "./icons/InviteIcon"
import { ReminderIcon } from "./icons/ReminderIcon"

import {
        Popover,
        PopoverContent,
        PopoverTrigger,
      } from "@/components/ui/popover"
import { MorePopover } from "./MorePopover"
import { ReminderPopOver } from "./ReminderPopover"
import { BackgroundPopover } from "./BackgroundPopover"

import { useNavigate } from "react-router-dom"
export function NoteSettings({bgColor, isModal, dialogRef, labels, setLabels}) {
        let navigate = useNavigate();

        const [openLabelInput, setOpenLabelInput] = useState(false);

        function closeDialog(){
                if(isModal === true){
                        //console.log('raaaannn');
                        dialogRef.current.close();
                        navigate('/notes');
                }
                
        }
        return (
                <div className='note-settings-icons-container' style={{backgroundColor: bgColor}}>
                        <div className="note-settings-icon" title="Add reminder">

                                <Popover>
                                        <PopoverTrigger>
                                                <ReminderIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                                <ReminderPopOver />
                                        </PopoverContent>
                                </Popover>
                        </div>
                        {/* <div className="note-settings-icon" title="Collaborator">
                                <InviteIcon />
                        </div> */}
                        <div className="note-settings-icon" title="Background options">
                                <Popover>
                                        <PopoverTrigger>
                                                <BackgroundIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                                <BackgroundPopover />
                                        </PopoverContent>
                                </Popover>
                        </div>
                        <div className="note-settings-icon" title="Add image">
                                <label htmlFor="image-input">
                                <ImageIcon />
                                <input type="file" name="images" id="image-input" accept="image/*" multiple={true} />
                                </label>
                        </div>
                        <div className="note-settings-icon" title="Archive">
                                <label htmlFor="archived-input">
                                <ArchiveIcon />

                                <input type="checkbox" name="archived" id="archived-input" />

                                </label>
                        </div>
                        <div className="note-settings-icon" title="More"  >

                                <Popover>
                                        <PopoverTrigger><MoreIcon /></PopoverTrigger>
                                        <PopoverContent>
                                                <MorePopover labels={labels} setLabels={setLabels}/>
                                        </PopoverContent>
                                </Popover>

                        </div>
                        <button className="button-close"
                        onClick={() => closeDialog()}>Close</button>
                </div>
        )
}