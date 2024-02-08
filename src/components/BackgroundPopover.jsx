export function BackgroundPopover(){
    return (
        <div className="popover">
            <div>
                <input type="radio" name="bg-color" id="default" value="#202124" />
                <input type="radio" name="bg-color" id="#77172e" value='#77172e' />
                <input type="radio" name="bg-color" id="#692b17" value='#692b17' />
                <input type="radio" name="bg-color" id="#7c4a03" value='#7c4a03' />
                <input type="radio" name="bg-color" id="#264d3b" value="#264d3b" />

                <input type="radio" name="bg-color" id="#0c625d" value="#0c625d" />
                <input type="radio" name="bg-color" id="#256377" value="#256377" />
                <input type="radio" name="bg-color"  value="#284255" />
                <input type="radio" name="bg-color"  value="#472e5b" />

                <input type="radio" name="bg-color" value='#6c394f' />
                <input type="radio" name="bg-color" value='#4b443a' />
                <input type="radio" name="bg-color" value='#232427' />
            </div>

            <div>
            <input type="radio" name="bg-img"  value="#202124" />
            <input type="radio" name="bg-img" value='https://www.gstatic.com/keep/backgrounds/grocery_dark_thumb_0615.svg' />
            </div>
        </div>
    )
}