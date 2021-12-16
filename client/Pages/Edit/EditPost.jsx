import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editPost } from "../../store/post";
import { fetchPost } from "../../store/post";

export const EditPost = (props) => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form onSubmit={(event) => handleSubmit(event)} className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={handleChange}
            name="body"
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postDetail: state.singlePost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(fetchPost(postId)),
    updatePost: (postId, postObj) => dispatch(editPost(postId, postObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
