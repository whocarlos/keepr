import { LightbulbIcon } from "./icons/LightbulbIcon"
import { ReminderIcon } from "./icons/ReminderIcon"
import { EditIcon } from "./icons/EditIcon"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { TrashIcon } from "./icons/TrashIcon"
import { useLocation, NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"
export function ClosedMenu({ setIsMenuHovered, isActive }) {
    let location = useLocation();
    let editLabelsRef = useRef(null);

    useEffect(() => {
        if(isActive === true){
            editLabelsRef.current.classList.add('active');
        }
    }, []);

    return (
        <div className="closed-menu" onMouseOver={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>

            <NavLink to='/'>
                <div className="menu-item" data-route='/'>
                    <div className="menu-icon">
                        <LightbulbIcon />
                    </div>
                </div>
            </NavLink>

            <NavLink to="/reminders">
                <div className="menu-item" data-route='reminders'>

                    <div className="menu-icon">
                        <ReminderIcon />
                    </div>


                </div>
            </NavLink>



            <div className="menu-item" id='edit-labels-closed' ref={editLabelsRef}>
                <div className="menu-icon">
                    <EditIcon />
                </div>
            </div>

            <NavLink to="/archive">
                <div className="menu-item" data-route='archive'>
                    <div className="menu-icon">
                        <ArchiveIcon />
                    </div>
                </div>
            </NavLink>


            <NavLink to='/trash'>
                <div className="menu-item" data-route='trash'>
                    <div className="menu-icon">
                        <TrashIcon />
                    </div>
                </div>
            </NavLink>


        </div>
    )
}