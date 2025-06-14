import React from 'react';

export const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onDragStart = (e:React.DragEvent<HTMLDivElement>) =>{
    console.log("I'm being dragged", e);
    
  }
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me !
      </div>
    </div>
  );
};
