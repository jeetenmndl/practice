import React from 'react';
import Logo from "@/../public/logo.png"
import Image from 'next/image';

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <Image src={Logo} alt="User Avatar" className="user-avatar" />
          <span className="username">@{post.username}</span>
          <span className="timestamp">{post.timestamp}</span>
        </div>
        <div className="post-actions">
          <button className="action-btn">
            <i className="fas fa-arrow-up"></i>
            <span className="vote-count">{post.votes}</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="action-btn">
            <i className="fas fa-comment"></i>
            <span className="comment-count">{post.comments}</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-share"></i>
          </button>
        </div>
      </div>
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-text">{post.content}</p>
      </div>
    </div>
  );
};

export default PostItem;