import React, {useState} from 'react';
import Comments from "./Comments";

function CommentsContainer({ video }) {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible)
  }

  const buttonLabel = commentsVisible ? 'Hide Comments' : 'Show Comments';

  return (
    <div className="commentswrap">
      <div className="commentbuttonwrap">
        <button onClick={toggleComments}>{buttonLabel}</button>
      </div>
      <Comments video={video} commentsVisible={commentsVisible} />
    </div>
  );
}

export default CommentsContainer;
