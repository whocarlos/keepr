import { LightbulbIcon } from "./icons/LightbulbIcon"
import { ReminderIcon } from "./icons/ReminderIcon"
import { EditIcon } from "./icons/EditIcon"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { TrashIcon } from "./icons/TrashIcon"
import { useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
export function ClosedMenu({ setIsMenuHovered, isEditLabelsSelected }) {
    let location = useLocation();
    let editLabelsRef = useRef(null);

    useEffect(() => {
        if(isEditLabelsSelected){
           editLabelsRef.current.style.backgroundColor = 'purple'
        }
    }, [])

    useEffect(() => {
        const closedMenuElem = document.querySelector('.closed-menu');
        let closedMenuItems = closedMenuElem.children;
        closedMenuItems = Array.from(closedMenuItems);

        let currLocation = location.pathname;

        if (currLocation !== '/') {
            currLocation = currLocation.substring(1);
        }
        closedMenuItems.forEach((elem) => {
            if (elem.getAttribute('data-route') === currLocation) {
                elem.style.backgroundColor = 'red';
            } else {
                if(elem.id !== 'edit-labels-closed')
                elem.style.backgroundColor = '#202124';
            }
        });
    }, [location]);


    return (
        <div className="closed-menu" onMouseOver={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
            <div className="menu-item" data-route='/'>
                <div className="menu-icon">
                    <LightbulbIcon />
                </div>
            </div>

            <div className="menu-item" data-route='reminders'>
                <div className="menu-icon">
                    <ReminderIcon />
                </div>
            </div>


            <div className="menu-item" id='edit-labels-closed' ref={editLabelsRef}>
                <div className="menu-icon">
                    <EditIcon />
                </div>
            </div>


            <div className="menu-item" data-route='archive'>
                <div className="menu-icon">
                    <ArchiveIcon />
                </div>
            </div>


            <div className="menu-item" data-route='trash'>
                <div className="menu-icon">
                    <TrashIcon />
                </div>
            </div>

        </div>
    )
}