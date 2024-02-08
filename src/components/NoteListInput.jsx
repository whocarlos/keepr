import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
import { useState } from "react";
import { ListItem } from "./ListItem";
import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';

export function NoteListInput({ contentRef }) {
    //console.log('sup from list', typeof contentRef.current.innerText);

    const contentArr = contentRef.current.innerText.split('\n');
    const [people, setPeople] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Sarah" },
        { id: 3, name: "Paul" },
      ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}>
            <SortableContext
                items={people}
                strategy={verticalListSortingStrategy}>

                {people.map((user) => {
                    return <ListItem key={user.id} user={user} id={user.id}/>
                })}
                
            </SortableContext>
        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        //console.log(active, over);
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }


}