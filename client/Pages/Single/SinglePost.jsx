import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPost } from "../../store/post";
import "./singlePost.css";

export const SinglePost = ({ getPost, userId, postInfo }) => {
  const { postId } = useParams();
  const canEdit = userId == postInfo.userId;
  console.log(userId, postInfo.userId);

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

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {postInfo.title}
          <div className="singlePostEdit">
            {canEdit && (
              <Link to={`/editPost/${postId}`}>
                <i className="singlePostIcon far fa-edit"></i>EDIT
              </Link>
            )}

            <i className="singlePostIcon far fa-trash-alt"></i>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
