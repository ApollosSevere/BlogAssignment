import axios from "axios";

const TOKEN = "token";
const token = window.localStorage.getItem(TOKEN);

const GET_POST = "GET_POST";

const _fetchPost = (post) => {
  return {
    type: GET_POST,
    payload: post,
  };
};

// Get
export const fetchPost = (postId) => {
  return async (dispatch) => {
    try {
      const { data: postInfo } = await axios.get(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_fetchPost(postInfo));
    } catch (error) {
      console.log(error);
    }
  };
};

// Update
export const editPost = (postId, postObj, tags) => {
  return async (dispatch) => {
    try {
      const { data: updatedPost } = await axios.put(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
        ...postObj,
        tags,
      });

      dispatch(_fetchPost(updatedPost));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return action.payload;
    default:
      return state;
  }
}
