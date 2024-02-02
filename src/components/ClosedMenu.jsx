import { LightbulbIcon } from "./icons/LightbulbIcon"
import { ReminderIcon } from "./icons/ReminderIcon"
import { EditIcon } from "./icons/EditIcon"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { TrashIcon } from "./icons/TrashIcon"
export function ClosedMenu() {
    return (
        <div className="menu">
            <div className="menu-icon">
                <LightbulbIcon />
            </div>

            <div className="menu-icon">
                <ReminderIcon />
            </div>

            <div className="menu-icon">
                <EditIcon />
            </div>

            <div className="menu-icon">
                <ArchiveIcon />
            </div>

            <div className="menu-icon">
                <TrashIcon />
            </div>
        </div>
    )
}