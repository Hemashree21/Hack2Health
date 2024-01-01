import React, { useState } from 'react';
import '../styles/Post.css';

function Post(props) {
  const { username, message, timestamp, image } = props;
  const [showFullMessage, setShowFullMessage] = useState(false);

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  const truncatedMessage = message.slice(0, 500);

  return (
    <div className="post">
      <img alt='anxietyimage' className='banner' src={image} />
      <div className="post-content">
        <p className="post-username">{username}</p>
        {showFullMessage ? (
          <p className="post-message">{message}</p>
        ) : (
          <p className="post-message">
            {truncatedMessage}
            {message.length > 500 && (
              <span onClick={toggleMessage} className="read-more">
                {showFullMessage ? 'Read Less' : 'Read More'}
              </span>
            )}
          </p>
        )}
        <p className="post-timestamp">{timestamp}</p>
      </div>
    </div>
  );
}

export default Post;
