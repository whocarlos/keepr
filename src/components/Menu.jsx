import { Form, useLocation, useNavigate, useSubmit } from "react-router-dom";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import { ReminderIcon } from "./icons/ReminderIcon";
import { EditIcon } from "./icons/EditIcon";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { useEffect, useRef } from "react";

export function Menu({ isMenuHovered, setIsMenuHovered, setIsEditLabelsSelected }) {
    let submmit = useSubmit();
    let navigate = useNavigate();
    let location = useLocation();

    const menuRef = useRef(null);

    function handleMouseLeave() {
        setIsMenuHovered(false);
    }

    useEffect(() => {
        if (isMenuHovered) {
            console.log('yo---- ', menuRef.current);

            menuRef.current.addEventListener('mouseleave', handleMouseLeave);
            menuRef.current.style.position = 'absolute';
            menuRef.current.style.width = '12rem'
        }


    }, [])

    useEffect(() => {

        const menuElem = document.querySelector('.menu');
        let menuItems = menuElem.children[0].children[0].children;
        menuItems = Array.from(menuItems);

        let currLocation = location.pathname;

        if (currLocation !== '/') {
            currLocation = currLocation.substring(1);
        }
        menuItems.forEach((elem) => {
            if (elem.getAttribute('data-route') === currLocation) {
                elem.style.backgroundColor = 'red';
            } else {
                elem.style.backgroundColor = '#202124';
            }
        });
    }, [location])


    function handleClick(e) {
        const targetElem = e.target;
        console.log(targetElem);

        if (targetElem.tagName === 'DIV') {
            if (targetElem.classList.contains('menu-item')) {


                const route = targetElem.getAttribute('data-route');

                console.log(route);


                if (route !== null) {
                    if (route === '/') {
                        navigate('/')
                    } else {
                        navigate('/' + route)
                    }
                }

                if (targetElem.id === 'edit-labels') {
                    setIsEditLabelsSelected(true);
                    targetElem.style.backgroundColor = 'purple';
                }



            }
        }
    }

    function handleChange(e) {
        console.log(e.target.id);



        if (e.target.id === 'trash-menu') {
            navigate('/trash');
        }
    }
    return (
        <div className="menu" ref={menuRef} onClick={handleClick} >
            <Form >
                <fieldset>
                    <div className="menu-item" data-route='/'>
                        <div className="menu-icon">
                            <LightbulbIcon />
                        </div>

                        <input type="radio" id="notes-menu" name="page" />
                        <label htmlFor="notes-menu">Notes</label>
                    </div>

                    <div className="menu-item" data-route='reminders'>
                        <div className="menu-icon">
                            <ReminderIcon />
                        </div>

                        <input type="radio" id="reminders-menu" name="page" />
                        <label htmlFor="reminders-menu">Reminders</label>
                    </div>

                    {/* To-do: render all the labels and make them accesible as a menu item (each) */}

                    {/* Edit labels doesn't need its own route, only the modal */}
                    <div className="menu-item" id="edit-labels">
                        <div className="menu-icon">
                            <EditIcon />
                        </div>

                        <input type="radio" id="editLabels-menu" name="page" />
                        <label htmlFor="editLabels-menu">Edit labels</label>
                    </div>

                    <div className="menu-item" data-route='archive'>
                        <div className="menu-icon">
                            <ArchiveIcon />
                        </div>

                        <input type="radio" id="archivedNotes-menu" name="page" />
                        <label htmlFor="archivedNotes-menu">Archived notes</label>
                    </div>

                    <div className="menu-item" data-route='trash'>
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