import React from 'react';
import Item from "./Items_r/Item";

const PostList = ({posts}) => {
    // if(!restaurants.length){
    //     return (
    //         <h1 style={{textAlign: 'center'}}>No rest</h1>
    //     )
    // }

    return (
        <div>
            {posts.map(post =>
                <Item post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;