import { useState } from "react";

export function NewFriendForm({ onAddFriend }) {
  const [newFriend, setNewFriend] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newFriend === "") return;

    onAddFriend(newFriend);

    setNewFriend("");
  }

  return (
    <form onSubmit={handleSubmit} className="form flex flex-column">
      <div className="friend-item flex flex-column">
        <label htmlFor="newfriend">New Friend:</label>
        <input
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          type="text"
          id="newfriend"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
