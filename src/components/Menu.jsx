import { Form } from "react-router-dom";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import { ReminderIcon } from "./icons/ReminderIcon";
import { EditIcon } from "./icons/EditIcon";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { useEffect, useRef } from "react";

export function Menu({isMenuHovered, setIsMenuHovered}) {
    const menuRef = useRef(null);

    useEffect(() => {
        if(isMenuHovered){
            console.log('yo---- ', menuRef.current);

            menuRef.current.addEventListener('mouseleave', () => setIsMenuHovered(false));
            menuRef.current.style.position = 'absolute';
        }
    }, [])

    return (
        <div className="menu" ref={menuRef}>
            <Form>
                <fieldset>
                    <div className="menu-item">
                        <div className="menu-icon">
                            <LightbulbIcon />
                        </div>

                        <input type="radio" id="notes-menu" name="page" />
                        <label htmlFor="notes-menu">Notes</label>
                    </div>

                    <div className="menu-item">
                        <div className="menu-icon">
                            <ReminderIcon />
                        </div>

                        <input type="radio" id="reminders-menu" name="page" />
                        <label htmlFor="reminders-menu">Reminders</label>
                    </div>

                    {/* To-do: render all the labels and make them accesible as a menu item (each) */}

                    <div className="menu-item">
                        <div className="menu-icon">
                            <EditIcon />
                        </div>

                        <input type="radio" id="editLabels-menu" name="page" />
                        <label htmlFor="editLabels-menu">Edit labels</label>
                    </div>

                    <div className="menu-item">
                        <div className="menu-icon">
                            <ArchiveIcon />
                        </div>

                        <input type="radio" id="archivedNotes-menu" name="page" />
                        <label htmlFor="archivedNotes-menu">Archived notes</label>
                    </div>

                    <div className="menu-item">
                        <div className="menu-icon">
                            <TrashIcon />
                        </div>

                        <input type="radio" id="trash-menu" name="page" />
                        <label htmlFor="trash-menu">Trash</label>
                    </div>
                </fieldset>
            </Form>
        </div>
    )
}