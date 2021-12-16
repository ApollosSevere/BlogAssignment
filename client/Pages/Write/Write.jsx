import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../store/feed";

export const Write = ({ user_Id, submitPost, username }) => {
  const [formData, setFormData] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(username);
      submitPost(formData, user_Id, username);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

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
    user_Id: state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitPost: (formObj, userId, username) =>
      dispatch(addPost(formObj, userId, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);