import { useState } from "react";
import { BookmarkIconSolid } from "./icons/BookmarkIconSolid";
import { BookmarkIcon } from "./icons/BookmarkIcon";
export function NoteTitleInput({ title, bookmarked }) {
    const [isCheck, setIscheck] = useState(bookmarked);
    const [titlevalue , setTitlevalue] = useState(title);

    function testCheckbox() {
        console.log('u clicked the checkbox');
        setIscheck(!isCheck);
    }

    return (
        <div className="title-container">
            <input type="text" id="title-input" placeholder="Title" name="title" defaultValue={title !== null ? title : null}  />
            <label htmlFor="bookmark" className="bookmark-icon">

                {isCheck ?
                    <BookmarkIconSolid />
                    :
                    <BookmarkIcon />
                }
                <input type="checkbox" name="bookmark" id="bookmark" onClick={testCheckbox} value={bookmarked} />

            </label>
        </div>
    )
}