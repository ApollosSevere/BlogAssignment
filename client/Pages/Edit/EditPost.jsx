import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editPost } from "../../store/post";
import { fetchPost } from "../../store/post";
import { useParams } from "react-router-dom";

export const EditPost = ({ getPost, updatePost, postDetail }) => {
  const [formData, setFormData] = useState(postDetail);
  const { postId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      updatePost(formData.id, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  useEffect(() => {
    const updateFormData = () => {
      setFormData(postDetail);
    };
    updateFormData();
  }, [postDetail]);

  useEffect(() => {
    const getData = () => {
      try {
        getPost(postId);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    setFormData(postDetail);
  }, []);

  return (
    <div className="write">
      {console.log(formData)}
      {formData && (
        <div>
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
                value={formData.title}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                onChange={handleChange}
                name="body"
                value={formData.body}
              />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
      )}
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
