import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPost } from "../../store/post";
import "./singlePost.css";

import { deletePost } from "../../store/feed";

export const SinglePost = ({ getPost, userId, postInfo, removePost }) => {
  const { postId } = useParams();
  const canEdit = userId == postInfo.userId;

  useEffect(() => {
    const getData = () => {
      try {
        getPost(postId);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [postId]);

  const handleClick = () => {
    try {
      removePost(postId);
      history.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={postInfo.img} alt="" />
        <h1 className="singlePostTitle">
          {postInfo.title}
          <div className="singlePostEdit">
            {canEdit && (
              <>
                <Link to={`/editPost/${postId}`}>
                  <i className="singlePostIcon far fa-edit"></i>EDIT
                </Link>

                <i className="singlePostIcon far fa-trash-alt"></i>

                <button onClick={() => handleClick()}>Delete</button>
              </>
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {postInfo.author_name}
              </Link>
            </b>
          </span>
          <span>
            {JSON.stringify(new Date(postInfo.createdAt).toLocaleDateString())}
          </span>
        </div>
        <p className="singlePostDesc">{postInfo.body}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    postInfo: state.singlePost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(fetchPost(postId)),
    removePost: (postId) => dispatch(deletePost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
