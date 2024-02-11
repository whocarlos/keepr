import { Form, NavLink, useLocation, useNavigate, useSubmit } from "react-router-dom";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import { ReminderIcon } from "./icons/ReminderIcon";
import { EditIcon } from "./icons/EditIcon";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { useEffect, useRef } from "react";

export function Menu({ isMenuHovered, setIsMenuHovered, setIsActive, isActive}) {
    let submmit = useSubmit();
    let navigate = useNavigate();
    let location = useLocation();

    const menuRef = useRef(null);
    const editLabelsRef = useRef(null);

    function handleMouseLeave() {
        setIsMenuHovered(false);
    }

    useEffect(() => {
        if (isMenuHovered) {
            //console.log('yo---- ', menuRef.current);

            menuRef.current.addEventListener('mouseleave', handleMouseLeave);
            menuRef.current.style.position = 'fixed';
            menuRef.current.style.width = '15rem'
        }


    }, [])

    useEffect(() => {
        if(isActive === true){
            editLabelsRef.current.classList.add('active');
        }
    }, []);

    function handleClick(e){
        const elem = e.target;

        console.log('u clicked it', elem);
        setIsActive(true);
        elem.classList.add('active');
    }

    
    return (
        <div className="menu" id="menu" ref={menuRef}  >

            <NavLink to='/notes'>
                <div className="menu-item" data-route='/'>
                    <div className="menu-icon">
                        <LightbulbIcon />
                    </div>

                    <label htmlFor="notes-menu">Notes</label>
                </div>
            </NavLink>


            <NavLink to="/reminders">
                <div className="menu-item" data-route='reminders'>
                    <div className="menu-icon">
                        <ReminderIcon />
                    </div>

                    <label htmlFor="reminders-menu">Reminders</label>
                </div>
            </NavLink>


            {/* To-do: render all the labels and make them accesible as a menu item (each) */}

            {/* Edit labels doesn't need its own route, only the modal */}
            <div className="menu-item" id="edit-labels" ref={editLabelsRef} onClick={handleClick}>
                <div className="menu-icon">
                    <EditIcon />
                </div>

                <label htmlFor="editLabels-menu">Edit labels</label>
            </div>


            <NavLink to="/archive">
                <div className="menu-item" data-route='archive'>
                    <div className="menu-icon">
                        <ArchiveIcon />
                    </div>

                    <label htmlFor="archivedNotes-menu">Archived notes</label>
                </div>
            </NavLink>



            <NavLink to="/trash" >
                <div className="menu-item" data-route='trash'>
                    <div className="menu-icon">
                        <TrashIcon />
                    </div>

                    <label htmlFor="trash-menu">Trash</label>
                </div>
            </NavLink>
        </div>
    )
}