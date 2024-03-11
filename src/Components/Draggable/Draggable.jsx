import React from 'react'
import { useState } from 'react'

const Draggable = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    function handleMouseDown(event) {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseDown);
        document.addEventListener('mouseup', handleMouseDown);
    }


    function handleMouseMove(event) {
        if (isDragging) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            });
        }
    }


    function handleMouseUp() {
        setIsDragging(false);
        document.removeEventListener('mousemove', handle)
    }


  return (
    <div>Draggable</div>
  )
}

export default Draggable