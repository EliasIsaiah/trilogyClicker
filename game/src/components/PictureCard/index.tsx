import React from "react";
import "./style.css";

interface Props {

  id: number;
  name: string;
  image: string;
  shufflePictures: (id:number) => void;
}


function PictureCard(props:Props) {
  
  const pictureStyle = {
    background: `center / contain no-repeat url(${props.image})`
  }

  return (
    <div style={pictureStyle} onClick ={() => props.shufflePictures(props.id)} className="col-4 card"></div>
    // <div style={pictureStyle} onClick ={() => props.shuffleFriends(props.id)} className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    // </div>
  );
}

export default PictureCard;
