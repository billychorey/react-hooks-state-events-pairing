import React, { useState } from 'react';

function Buttoncontainer({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function handleUpVote() {
    setUpvotes(upvotes + 1);
  }

  function handleDownVote() {
    setDownvotes(downvotes + 1);
  }

  return (
    <div className="buttoncontainer">
      <button onClick={handleUpVote}>upvotes: {upvotes}</button>
      <button onClick={handleDownVote}>downvotes: {downvotes}</button>
    </div>
  );
}

export default Buttoncontainer;
