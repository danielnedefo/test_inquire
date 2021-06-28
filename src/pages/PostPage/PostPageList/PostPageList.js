import React from 'react';
import {v4} from 'uuid';
import PostPageElement from '../PostPageElement/PostPageElement'
function PostPageList({posts,deletePost,updatePost}) {
    const renderPosts = posts.map(post => <PostPageElement updatePost={updatePost} deletePost={deletePost} key={v4()} post={post}/>)
    return (
        <React.Fragment>
        {renderPosts}
        </React.Fragment>
    )
  }
  export default PostPageList