function Comment({ video, commentsVisible }) {


    return (
      <div className={`comment ${commentsVisible ? '' : 'displayNone'}`}>
      <h2>{video.comments.length} Comments</h2>
        {video.comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Comment;
  