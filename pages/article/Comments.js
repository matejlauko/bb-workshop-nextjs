import { Component } from 'react';

const styles = {
  comments: {
    margin: '4rem auto 0',
    borderStyle: 'solid',
    borderWidth: '1px 0',
    borderColor: 'black',
    padding: '1rem 0',
  },
  comment: {
    whiteSpace: 'pre-wrap',
  },
};

const Comment = ({ comment }) =>
  <li style={styles.comment}>
    <p>
      {comment.text}
    </p>
  </li>;

const Comments = ({ comments }) =>
  <aside style={styles.comments}>
    <h3>Comments:</h3>

    <ul>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </ul>
  </aside>;

export default Comments;
