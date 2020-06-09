// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faHospital } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {

const [ beenLiked, setBeenLiked ] = useState(false)

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={beenLiked ? faHospital : faHeart} onClick={evt => setBeenLiked(!beenLiked)} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{beenLiked ? props.likes +1 : props.likes}</p>
    </div>
  )
};

export default LikeSection;
