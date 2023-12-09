import { useState } from "react";
import { Friend } from "./Friend";

export function FriendsList({ displayList, checkedFriend, unFriend }) {
  console.log(displayList);
  return (
    <div className="friendsList">
      <h1>Friends List</h1>
      <ul>
        {displayList.length === 0 && "No Friends"}
        {displayList.map((beF) => {
          return (
            <Friend
              key={beF.id}
              {...beF}
              checkedFriend={checkedFriend}
              unFriend={unFriend}
            />
          );
        })}
      </ul>
    </div>
  );
}
// id={beF.id}
// name={beF.name}
// completed={beF.completed}
