import { useEffect, useState } from "react";
import "./styles.css";
import { NewFriendForm } from "./NewFriendForm";
import { FriendsList } from "./FriendsList";

export default function App() {
  const [toBeFriend, setToBeFriend] = useState(() => {
    const localValue = localStorage.getItem("Friends");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    return localStorage.setItem("Friends", JSON.stringify(toBeFriend));
  }, [toBeFriend]);

  function addFriend(name) {
    setToBeFriend((currentFriend) => {
      return [
        ...currentFriend,
        { id: crypto.randomUUID(), name, completed: false },
      ];
    });
  }

  function toggleCheckedFriend(id, completed) {
    setToBeFriend((currentFriend) => {
      return currentFriend.map((eachFriend) => {
        if (eachFriend.id === id) {
          return { ...eachFriend, completed };
        }
        return eachFriend;
      });
    });
  }
  function deleteFriend(id) {
    setToBeFriend((currentFriend) => {
      return currentFriend.filter((eachFriend) => eachFriend.id !== id);
    });
  }
  return (
    <>
      <NewFriendForm onAddFriend={addFriend} />
      <FriendsList
        displayList={toBeFriend}
        checkedFriend={toggleCheckedFriend}
        unFriend={deleteFriend}
      />
    </>
  );
}
