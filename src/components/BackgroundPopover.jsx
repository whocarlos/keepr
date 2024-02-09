export function BackgroundPopover() {
    return (
        <div className="popover">
            <div className="bg-container">
                <label htmlFor="default" className="color-container" >
                    <div className="color-container" style={{ backgroundColor: "#202124" }}></div>
                    <input type="radio" name="bg-color" id="default" value="#202124" className="bg-color-input" />

                </label>

                <label htmlFor="#77172e">
                    <div className="color-container" style={{ backgroundColor: "#77172e" }}></div>
                    <input type="radio" name="bg-color" id="#77172e" value='#77172e' className="bg-color-input"/>
                </label>

                <label htmlFor="#692b17">
                    <div className="color-container" style={{ backgroundColor: "#692b17" }}></div>
                    <input type="radio" name="bg-color" id="#692b17" value='#692b17' className="bg-color-input"/>
                </label>

                <label htmlFor="#7c4a03">
                    <div className="color-container" style={{ backgroundColor: "#7c4a03" }}></div>
                    <input type="radio" name="bg-color" id="#7c4a03" value='#7c4a03' className="bg-color-input"/>
                </label>

                <label htmlFor="#264d3b">
                    <div className="color-container" style={{ backgroundColor: "#264d3b" }}></div>
                    <input type="radio" name="bg-color" id="#264d3b" value="#264d3b" className="bg-color-input"/>
                </label>

                <label htmlFor="#0c625d">
                    <div className="color-container" style={{ backgroundColor: "#0c625d" }}></div>
                    <input type="radio" name="bg-color" id="#0c625d" value="#0c625d" className="bg-color-input"/>
                </label>

                <label htmlFor="#256377">
                    <div className="color-container" style={{ backgroundColor: "#256377" }}></div>
                    <input type="radio" name="bg-color" id="#256377" value="#256377" className="bg-color-input"/>
                </label>

                <label htmlFor="#284255">
                    <div className="color-container" style={{ backgroundColor: "#284255" }}></div>
                    <input type="radio" name="bg-color" id="#284255" value="#284255" className="bg-color-input"/>
                </label>

                <label htmlFor="#472e5b">
                    <div className="color-container" style={{ backgroundColor: "#472e5b" }}></div>
                    <input type="radio" name="bg-color" id="#472e5b" value="#472e5b" className="bg-color-input"/>
                </label>

                <label htmlFor="#6c394f">
                    <div className="color-container" style={{ backgroundColor: "#6c394f" }}></div>
                    <input type="radio" name="bg-color" id='#6c394f' value='#6c394f' className="bg-color-input"/>
                </label>

                <label for='#4b443a'>
                    <div className="color-container" style={{ backgroundColor: "#4b443a" }}></div>
                    <input type="radio" name="bg-color" id='#4b443a' value='#4b443a' className="bg-color-input"/>
                </label>

                <label htmlFor="#232427">
                    <div className="color-container" style={{ backgroundColor: "#232427" }}></div>
                    <input type="radio" name="bg-color" id="#232427" value="#232427" className="bg-color-input"/>
                </label>
            </div>

            <div>
                <input type="radio" name="bg-img" value="#202124" />
                <input type="radio" name="bg-img" value='https://www.gstatic.com/keep/backgrounds/grocery_dark_thumb_0615.svg' />
            </div>
        </div>
    )
}