import { useState } from "react";
import { BookmarkIconSolid } from "./icons/BookmarkIconSolid";
import { BookmarkIcon } from "./icons/BookmarkIcon";
export function NoteTitleInput({title}) {
    const [isCheck, setIscheck] = useState(false);


    function testCheckbox() {
        console.log('u clicked the checkbox');
        setIscheck(!isCheck);
    }

    return (
        <div className="title-container">
            <input type="text" id="title-input" placeholder="Title" name="title" defaultValue={title !== null ? title : ''} />
            <label htmlFor="bookmark" className="bookmark-icon">
                {
                    isCheck ?
                        <BookmarkIconSolid />
                        :
                        <BookmarkIcon />
                }

                <input type="checkbox" name="bookmark" id="bookmark" onClick={testCheckbox} />
 
            </label>
        </div>
    )
}