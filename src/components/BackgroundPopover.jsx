import { CheckIcon } from "./icons/CheckIcon";
import { DropletIcon } from "./icons/DropletIcon";
import { ImageOffIcon } from "./icons/ImageOffIcon";

export function BackgroundPopover() {
    return (
        <div className="popover " id="pop-over-bg">
            <div className="bg-container">

                <label htmlFor="default" >
                    <input type="radio" name="bg_color" id="default" value="#202124" className="bg-color-input" defaultChecked />
                    <CheckIcon />
                    <div className="color-container" style={{ backgroundColor: "#202124" }} id="bg_color-default">
                        <DropletIcon />
                    </div>

                </label>

                <label htmlFor="#77172e">
                    <input type="radio" name="bg_color" id="#77172e" value='#77172e' className="bg-color-input" />
                    <CheckIcon />
                    <div className="color-container" style={{ backgroundColor: "#77172e" }}></div>
                </label>

                <label htmlFor="#692b17">
                    <input type="radio" name="bg_color" id="#692b17" value='#692b17' className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#692b17" }}></div>
                </label>

                <label htmlFor="#7c4a03">
                    <input type="radio" name="bg_color" id="#7c4a03" value='#7c4a03' className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#7c4a03" }}></div>
                </label>

                <label htmlFor="#264d3b">
                    <input type="radio" name="bg_color" id="#264d3b" value="#264d3b" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#264d3b" }}></div>
                </label>

                <label htmlFor="#0c625d">
                    <input type="radio" name="bg_color" id="#0c625d" value="#0c625d" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#0c625d" }}></div>
                </label>

                <label htmlFor="#256377">
                    <input type="radio" name="bg_color" id="#256377" value="#256377" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#256377" }}></div>
                </label>

                <label htmlFor="#284255">
                    <input type="radio" name="bg_color" id="#284255" value="#284255" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#284255" }}></div>
                </label>

                <label htmlFor="#472e5b">
                    <input type="radio" name="bg_color" id="#472e5b" value="#472e5b" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#472e5b" }}></div>
                </label>

                <label htmlFor="#6c394f">
                    <input type="radio" name="bg_color" id='#6c394f' value='#6c394f' className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#6c394f" }}></div>
                </label>

                <label htmlFor='#4b443a'>
                    <input type="radio" name="bg_color" id='#4b443a' value='#4b443a' className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#4b443a" }}></div>
                </label>

                <label htmlFor="#232427">
                    <input type="radio" name="bg_color" id="#232427" value="#232427" className="bg-color-input" />
                    <CheckIcon />

                    <div className="color-container" style={{ backgroundColor: "#232427" }}></div>
                </label>
            </div>
            <hr id="bg-separator" />
            <div className="bg-container">

                <label htmlFor="default-img">
                    <input type="radio" name="bg-img" id="default-img" value="#202124" className="bg-img-input" defaultChecked />
                    <CheckIcon />
                    <div className="img-bg-container" style={{ backgroundColor: "#202124" }} id="bg-img-default">
                        <ImageOffIcon />
                    </div>
                </label>

                <label htmlFor="grocery">
                    <input type="radio" name="bg-img" id="grocery" value='https://www.gstatic.com/keep/backgrounds/grocery_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/grocery_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="food">
                    <input type="radio" name="bg-img" id="food" value='https://www.gstatic.com/keep/backgrounds/food_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/food_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="music">
                    <input type="radio" name="bg-img" id="music" value='https://www.gstatic.com/keep/backgrounds/music_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/music_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="recipes">
                    <input type="radio" name="bg-img" id="recipes" value='https://www.gstatic.com/keep/backgrounds/recipe_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/recipe_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="notes">
                    <input type="radio" name="bg-img" id="notes" value='https://www.gstatic.com/keep/backgrounds/notes_dark_thumb_0715.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/notes_dark_thumb_0715.svg)" }}>
                    </div>
                </label>

                <label htmlFor="places">
                    <input type="radio" name="bg-img" id="places" value='https://www.gstatic.com/keep/backgrounds/places_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/places_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="trips">
                    <input type="radio" name="bg-img" id="trips" value='https://www.gstatic.com/keep/backgrounds/travel_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/travel_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="video">
                    <input type="radio" name="bg-img" id="video" value='https://www.gstatic.com/keep/backgrounds/video_dark_thumb_0615.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/video_dark_thumb_0615.svg)" }}>
                    </div>
                </label>

                <label htmlFor="celebration">
                    <input type="radio" name="bg-img" id="celebration" value='https://www.gstatic.com/keep/backgrounds/celebration_dark_thumb_0715.svg' className="bg-img-input" />
                    <CheckIcon />

                    <div className="img-bg-container" style={{ background: "url(https://www.gstatic.com/keep/backgrounds/celebration_dark_thumb_0715.svg)" }}>
                    </div>
                </label>


            </div>
        </div>
    )
}