import { Component } from 'react';
const cowsayPromise = import('cowsay-browser');

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

class Comment extends Component {
  constructor(props, context) {
    super(props, context);

    this.CommentDisplay = (
      <p>
        {this.props.comment.text}
      </p>
    );
  }

  render() {
    setTimeout(() => {
      cowsayPromise.then(cowsay => {
        this.CommentDisplay = (
          <div>
            {cowsay.say({ text: this.props.comment.text })}
          </div>
        );
        this.forceUpdate();
      });
    }, 5000);

    return (
      <li style={styles.comment}>
        {this.CommentDisplay}
      </li>
    );
  }
}

const Comments = ({ comments }) =>
  <aside style={styles.comments}>
    <h3>Comments:</h3>

    <ul>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </ul>
  </aside>;

export default Comments;
