import { Form, NavLink, useLocation, useNavigate, useSubmit } from "react-router-dom";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import { ReminderIcon } from "./icons/ReminderIcon";
import { EditIcon } from "./icons/EditIcon";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { useEffect, useRef } from "react";
import EditLabelsModal from "./EditLabelsModal";
import { LabelIcon } from "./icons/LabelIcons";
export function Menu({ isMenuOpen, labels, setLabels }) {
    const editDialogRef = useRef(null);
    const navRef = useRef(null);

    function handleClick(e) {
        editDialogRef.current.showModal();
    }

    return (
        <>
            <nav id="labels-modal" className={isMenuOpen ? 'active' : ''}  >
                <NavLink to='/notes'>
                    <div className="menu-item">
                        <div className="menu-icon">
                            <LightbulbIcon />
                        </div>

                        <label htmlFor="notes-menu">Notes</label>
                    </div>
                </NavLink>
                <NavLink to="/reminders">
                    <div className="menu-item">
                        <div className="menu-icon">
                            <ReminderIcon />
                        </div>

                        <label htmlFor="reminders-menu">Reminders</label>
                    </div>
                </NavLink>


                {/* To-do: render all the labels and make them accesible as a menu item (each) */}

                {/* Edit labels doesn't need its own route, only the modal */}

                {labels.map((label) => {
                    return (
                        <NavLink to={`/labels/${label.id}`}>
                            <div className="menu-item">
                                <div className="menu-icon">
                                    <LabelIcon />
                                </div>
                                <label>{label.label_name}</label>
                            </div>
                        </NavLink>
                    );
                })}

                <a >
                    <div className="menu-item" id="edit-labels" onClick={handleClick} >
                        <div className="menu-icon">
                            <EditIcon />

                        </div>

                        <label htmlFor="editLabels-menu">Edit labels</label>
                    </div>
                </a>



                <NavLink to="/archive">
                    <div className="menu-item">
                        <div className="menu-icon">
                            <ArchiveIcon />
                        </div>

                        <label htmlFor="archivedNotes-menu">Archived notes</label>
                    </div>
                </NavLink>



                <NavLink to="/trash" >
                    <div className="menu-item">
                        <div className="menu-icon">
                            <TrashIcon />
                        </div>

                        <label htmlFor="trash-menu">Trash</label>
                    </div>
                </NavLink>
            </nav>
            <EditLabelsModal editDialogRef={editDialogRef} labels={labels} setLabels={setLabels} />
        </>
    )
}