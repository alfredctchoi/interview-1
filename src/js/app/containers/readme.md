// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {getPosts, selectPost, deselectPost} from '../actions/post'
//
// const isInPostRecursive = (node, className) => {
//   if (node.className.indexOf(className) > -1) return true;
//   if (node.nodeName !== 'BODY') {
//     return isInPostRecursive(node.parentNode, className);
//   }
//
//   return false;
// };
//
// const mapStateToProps = (state) => {
//   const {posts, isLoading, selectedPostId} = state.postList;
//   return {
//     posts,
//     isLoading,
//     selectedPostId
//   }
// };s
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPostSelect: (id) => {
//       dispatch(selectPost(id))
//     },
//     loadPosts: () => {
//       dispatch(getPosts())
//     },
//     closeAllComments: (e) => {
//       if (isInPostRecursive(e.target, 'post')) return;
//       dispatch(deselectPost());
//     }
//   }
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostList);