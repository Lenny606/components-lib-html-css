import Draggable from 'react-draggable';
import {useState} from "react";

export const DragComponent = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const handleDrag = (e, position) => {
        setPosition({
            x: position.x,
            y: position.y
        })
    }
    return (<>
            <Draggable onDrag={handleDrag} bounds={'parent'}>
                <div style={{
                    backgroundColor: 'blue',
                    width: '100px',
                    height: '50px'
                }}
                     className={"handle"}>DRAG on position X:{position.x} Y:{position.y}</div>
            </Draggable>


            <Draggable onDrag={handleDrag} >
                <div className={'handle'}>
                    HADLE BAR

                    <div style={{
                        backgroundColor: 'yellow',
                        width: '100px',
                        height: '50px'
                    }}
                    >DRAG on position {position.x + " " + position.y}</div>
                </div>
            </Draggable>
        </>
    )
}