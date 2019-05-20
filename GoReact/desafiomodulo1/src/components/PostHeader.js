import React from 'react';
import PropTypes from 'prop-types';

// const time = new Date().toLocaleTimeString();

const PostHeader = props => (
  <div className="post-header">
    <img src={props.avatar} className="avatar-post" alt="Avatar Dono do Post" />
    <div className="dados">
      <p className="name">{props.name}</p>
      <p className="time">{props.time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
