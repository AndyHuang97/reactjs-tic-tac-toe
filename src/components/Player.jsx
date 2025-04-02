import { useState } from "react";

export default function player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing); // => false
    //setIsEditing(!isEditing); // => still false because react schedules the state update
    setIsEditing((editing => !editing)); // => false
    //setIsEditing((editing => !editing)); // => would set to true and nothing would happen on UI
  }

  function handleSave() {
    setIsEditing(false);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) playerName = <input type="text" required value={name} />;

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
