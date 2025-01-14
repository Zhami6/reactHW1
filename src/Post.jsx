import React from 'react';

function Post({ title, content, onEdit }) {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onEdit}>Edit Post</button>
        </div>
    );
}

export default Post;
