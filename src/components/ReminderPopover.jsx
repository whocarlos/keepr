export function ReminderPopOver(){
    return (
        <div className="popover" id="reminder-popover">
            <p>Set time and date</p>
            <hr />
            <input type="date" />
            <input type="time" />
            <button>Save</button>
        </div>
    )
}