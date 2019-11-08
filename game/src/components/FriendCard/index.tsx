import React from "react";
import "./style.css";

interface Props {

  id: number;
  name: string;
  image: string;
  shuffleFriends: (id:number) => void;
}

function FriendCard(props:Props) {
  return (
    <div onClick ={() => props.shuffleFriends(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      {/* <span onClick={() => props.shuffleFriends(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
