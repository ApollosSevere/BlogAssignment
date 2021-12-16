import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../store/post";

export const SinglePost = ({ getPost }) => {
  const yo = useParams();
  console.log(yo.id, useParams());
  //   useEffect(() => {
  //     const getData = () => {
  //       try {
  //         console.log("working?", postId);
  //         getPost(postId);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getData();
  //   }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo"></div>
        <p className="singlePostDesc">{}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(fetchPost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
