export function BackgroundPopover({setBg}){
    return (
        <div className="popover">
            <div>
                <input type="radio" name="bg" id="default" value="#202124" />
                <input type="radio" name="bg" id="#77172e" value='#77172e' />
                <input type="radio" name="bg" id="#692b17" value='#692b17' />
            </div>
        </div>
    )
}