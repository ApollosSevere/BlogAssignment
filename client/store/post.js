import axios from "axios";

const GET_POST = "GET_POST";

const _fetchPost = (post) => {
  return {
    type: GET_POST,
    payload: post,
  };
};

export const fetchPost = (postId) => {
  return async (dispatch) => {
    try {
      const { data: postInfo } = await axios.get(`/api/post/${postId}`);
      dispatch(_fetchPost(postInfo));
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
