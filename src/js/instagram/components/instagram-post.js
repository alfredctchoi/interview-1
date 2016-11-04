import React from 'react';
import styles from './instagram-post.css'

const InstagramPost = ({ post }) => (
  <img className={styles.post} src={post.images.low_resolution.url} />
);

export default InstagramPost;