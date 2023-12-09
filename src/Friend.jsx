export function Friend({ id, name, completed, checkedFriend, unFriend }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        id="frienditemlist"
        onChange={(e) => checkedFriend(id, e.target.checked)}
      />
      <label htmlFor="frienditemlist">{name}</label>
      <button onClick={() => unFriend(id)} className="btn">
        Delete
      </button>
    </li>
  );
}
