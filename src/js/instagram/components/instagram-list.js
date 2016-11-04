import React, {Component} from 'react'
import InstagramPost from './instagram-post'
import styles from './instagram-list.css'

export default class extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadRecent} = this.props;
    loadRecent();
  }

  render() {
    const {isLoading, posts} = this.props;

    if (isLoading){
      return <div>Loading posts...</div>;
    }

    return <section className={styles.list}>
      {posts.map(post => <InstagramPost key={post.id} post={post}/>)}
    </section>
  }
};