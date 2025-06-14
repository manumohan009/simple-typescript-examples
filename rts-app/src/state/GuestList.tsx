import React, { useState } from "react";




const GuestList: React.FC = () =>{
    const [name, setName] = useState<string>("");
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name]);
        setName("");
    };
    return (
        <div>
        <h3>Guest List</h3>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
        <ul>
            {guests.map((guest, index) => (
                <li key={index}>{guest}</li>
            ))} 
        </ul>
        <p>Number of guests: {guests.length}</p>
        </div>
    );
}

export default GuestList;