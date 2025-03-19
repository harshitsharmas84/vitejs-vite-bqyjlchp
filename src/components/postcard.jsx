import LikeButton from "./likebutton";
import "./postcard.css";
import PropTypes from 'prop-types';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img
        src={post.profileImage}
        alt={`${post.username}'s profile`}
        className="profile-image"
      />
      <div className="post-content">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} />
      </div>
    </div>
  );
}
PostCard.propTypes = {
  post: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostCard;

