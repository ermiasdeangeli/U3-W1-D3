import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => (
                <SingleComment key={index} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsList;