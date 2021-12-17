import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addPost } from "../../store/feed";
import TagSelector from "../../components/utils/TagSelector.jsx";
import { Redirect } from "react-router-dom";

import "./write.css";

export const Write = ({ user_Id, submitPost, username }) => {
  const [optionSelected, setSelected] = useState([]);
  const [formData, setFormData] = useState();
  const [posted, setPosted] = useState(false);
  const [img] = useState(
    `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * (10000000 - 1) + 1
    )}`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const tagsPicked = optionSelected.map((tag) => tag.value);
      submitPost({ ...formData, img }, tagsPicked, user_Id, username);
      setPosted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      {posted ? (
        <Redirect to="/home" />
      ) : (
        <div className="write">
          {("img ?", console.log(img))}
          <img className="writeImg" src={img} alt="" />
          <TagSelector
            optionSelected={optionSelected}
            setSelected={setSelected}
            canAdd={optionSelected.length >= 3}
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user_Id: state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitPost: (formObj, tagsSelected, userId, username) =>
      dispatch(addPost(formObj, tagsSelected, userId, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
