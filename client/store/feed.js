import axios from "axios";

// ACTION
const LOAD_FEED = "LOAD_FEED";

// ACTION CREATORS
const _updateFeed = (posts) => {
  return {
    type: LOAD_FEED,
    posts,
  };
};

// THUNKS
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data: posts } = await axios.get("/api/posts");
      dispatch(_updateFeed(posts));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function feedReducer(state = [], action) {
  switch (action.type) {
    case LOAD_FEED:
      return action.posts;
    default:
      return state;
  }
}