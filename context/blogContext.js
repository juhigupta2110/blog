import React from 'react';

import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * Math.random(33, 55) * 999),
          title: `blog post # ${state.length + 1}`,
        },
      ];

    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => dispatch({type: 'add_blogpost'});
};

const deleteBlogPost = dispatch => {
  return id => dispatch({type: 'delete_blogpost', payload: id});
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);
