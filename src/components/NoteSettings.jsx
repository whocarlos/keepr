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

MorePopover
export function NoteSettings({setIsListInput, isListInput}) {

        return (
                <div className='note-settings-icons-container'>
                        <div className="note-settings-icon" title="Add reminder">

                                <Popover>
                                        <PopoverTrigger>
                                                <ReminderIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                                <MorePopover />
                                        </PopoverContent>
                                </Popover>
                        </div>
                        <div className="note-settings-icon" title="Collaborator">
                                <InviteIcon />
                        </div>
                        <div className="note-settings-icon" title="Background options">
                                <Popover>
                                        <PopoverTrigger>
                                                <BackgroundIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                                <MorePopover />
                                        </PopoverContent>
                                </Popover>
                        </div>
                        <div className="note-settings-icon" title="Add image">
                                <ImageIcon />
                        </div>
                        <div className="note-settings-icon" title="Archive">
                                <ArchiveIcon />

                        </div>
                        <div className="note-settings-icon" title="More"  >

                                <Popover>
                                        <PopoverTrigger><MoreIcon /></PopoverTrigger>
                                        <PopoverContent>
                                                <MorePopover/>
                                        </PopoverContent>
                                </Popover>

                        </div>

                        <div className="note-settings-icon" title="Backward">
                                <BackwardIcon />

                        </div>
                        <div className="note-settings-icon" title="Forward">
                                <ForwardIcon />

                        </div>
                        <button className="button-close">Close</button>
                </div>
        )
}