import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editPost } from "../../store/post";
import { fetchPost } from "../../store/post";
import { useParams } from "react-router-dom";
import TagSelector from "../../components/utils/TagSelector.jsx";

export const EditPost = ({ getPost, updatePost, postDetail }) => {
  const [optionSelected, setSelected] = useState(null);
  const [formData, setFormData] = useState(postDetail);
  const { postId } = useParams();

  const formatPrevTags = () => {
    console.log(Object.keys(formData).length > 0, "<---------");
    let result = null;
    if (Object.keys(formData).length > 0 && postDetail) {
      result = formData.tags.map((tag) => ({
        value: tag,
        label: tag,
      }));
    }
    return result;
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const tagsPicked = optionSelected.map((tag) => tag.value);
      updatePost(formData.id, formData, tagsPicked);
      history.back();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateFormData = () => {
      setFormData(postDetail);
      setSelected(formatPrevTags());
    };
    updateFormData();
  }, [postDetail, formData]);

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
    setSelected(formatPrevTags());
  }, []);

  return (
    <div className="write">
      {console.log(formData)}
      {formData && (
        <div>
          <TagSelector
            optionSelected={optionSelected}
            setSelected={setSelected}
          />
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
    updatePost: (postId, postObj, tagsSelected) =>
      dispatch(editPost(postId, postObj, tagsSelected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
