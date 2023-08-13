export const filterInitial = {
  genre: null,
  release: null,
  rating: null,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload,
      };

    case "SET_RELEASE":
      return {
        ...state,
        release: +action.payload,
      };

    case "SET_RATING":
      return {
        ...state,
        rating: +action.payload,
      };

    default:
      return state;
  }
};
