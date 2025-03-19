import { useState } from "react";
import PropTypes from "prop-types";
import "./likebutton.css";

function LikeButton({ isLiked: initialIsLiked }) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const toogleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={toogleLike}
    >
      {isLiked ? "❤️" : "♡"}
    </button>
  );
}
LikeButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};

export default LikeButton;
