import axios from "axios";

const initialState = {
  allPost: [],
  filteredPost: [],
};

// ACTION
const LOAD_FEED = "LOAD_FEED";
const SET_FILTERED = "SET_FILTERED";

// ACTION CREATORS
const _updateFeed = (posts) => {
  return {
    type: LOAD_FEED,
    posts,
  };
};

const _setFiltered = (posts) => {
  return {
    type: SET_FILTERED,
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

export const addPost = (formObj, tagsSelected, userId, author_name) => {
  return async (dispatch) => {
    try {
      await axios.post("/api/posts/addpost", {
        ...formObj,
        tags: tagsSelected,
        userId,
        author_name,
      });
      dispatch(fetchPosts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateFilteredPost = (data) => {
  return async (dispatch) => {
    dispatch(_setFiltered(data));
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/posts/${postId}`, { postId });

      dispatch(fetchPosts());
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FEED:
      return { ...state, allPost: action.posts };
    case SET_FILTERED:
      return { ...state, filteredPost: action.posts };
    default:
      return state;
  }
}
