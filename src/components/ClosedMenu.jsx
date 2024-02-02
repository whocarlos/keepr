import { LightbulbIcon } from "./icons/LightbulbIcon"
import { ReminderIcon } from "./icons/ReminderIcon"
import { EditIcon } from "./icons/EditIcon"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { TrashIcon } from "./icons/TrashIcon"
export function ClosedMenu() {
    return (
        <div className="closed-menu">
            <div className="menu-item">
                <div className="menu-icon">
                    <LightbulbIcon />
                </div>
            </div>

            <div className="menu-item">
                <div className="menu-icon">
                    <ReminderIcon />
                </div>
            </div>


            <div className="menu-item">
                <div className="menu-icon">
                    <EditIcon />
                </div>
            </div>


            <div className="menu-item">
                <div className="menu-icon">
                    <ArchiveIcon />
                </div>
            </div>


            <div className="menu-item">
                <div className="menu-icon">
                    <TrashIcon />
                </div>
            </div>

        </div>
    )
}