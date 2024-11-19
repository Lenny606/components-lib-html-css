import Draggable, {DraggableCore} from 'react-draggable';
import {useState} from "react";

export const DragComponent = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const handleDrag = (e, position) => {
       setPosition({
           x: position.x,
           y: position.y
       })
    }
    return (
        <Draggable onDrag={handleDrag}>
            <div style={{
                backgroundColor: 'yellow',
                width: '100px',
                height: '50px'
            }}
                 className={"handle"}>DRAG on position {position.x + " " + position.y}</div>
        </Draggable>
    )
}