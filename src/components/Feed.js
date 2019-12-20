import React from "react";
import Post from "./Post.js";

function Feed(props) {
  const posts = props.feedData.map(post => {
    const { id, title, url, author, ups, created_utc, preview, handleFavorite, favoriteAction, image } = post.data;

    return (
      <Post 
        key={id} 
        id={id}  
        title={title}
        url={url}
        author={author} 
        upvotes={ups} 
        posted={created_utc}
        image={preview.images[0].resolutions[3].url}
        handleFavorite={props.handleFavorite}
        favoriteAction={props.favoriteAction}
      />
    );
  });

  return (
    <div className="feed">
      {posts}
    </div>
  );
}

export default Feed;