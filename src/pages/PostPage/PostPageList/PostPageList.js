import React from 'react';
import {v4} from 'uuid';
import PostPageElement from '../PostPageElement/PostPageElement'
function PostPageList({posts,deletePost,updatePost,toggleModalForComments}) {
    const renderPosts = posts.map(post => <PostPageElement toggleModalForComments={toggleModalForComments} updatePost={updatePost} deletePost={deletePost} key={v4()} post={post}/>)
    return (
        <React.Fragment>
        {renderPosts}
        </React.Fragment>
    )
  }
  export default PostPageList