import React, { useEffect, useState } from "react";
import Modal from "./Modal";
function UserData() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch(`https://60487a79b801a40017ccdd28.mockapi.io/fullThrottle/members`)
      .then((results) => results.json())

      .then((data) => {
        setMember(data);
      });
  }, []);

  return (
    <div class="container">
      <h4>Users</h4>
      <ul className="collection">
        {member.map((user) => {
          return (
            <li class="collection-item" key={user.id}>
              {user.real_name}
              <Modal prop={user}></Modal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserData;
