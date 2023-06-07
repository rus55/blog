import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            <ul>
                {comments?.map((comment) => {
                    return <li key={comment.id}>{comment.email} : {comment.body}</li>
                })}
            </ul>
        </div>
    );
};

export default Comments;