import { useState } from "react";

export default function player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing); // => false
    //setIsEditing(!isEditing); // => still false because react schedules the state update
    setIsEditing((editing) => !editing); // => false
    //setIsEditing((editing => !editing)); // => would set to true and nothing would happen on UI
  }

  function handleChange(event) {
    // target is the element that triggered the event
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    editablePlayerName = (
      // two-way binding: getting a value out of this input and refeeding back this value into this input
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
