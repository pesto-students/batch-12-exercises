import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  state = {
    posts: [],
  };

  fetchPosts() {
    const myHeaders = new Headers ({
      'pesto-password': 'darth vader'
    });
    fetch('http://localhost:3001/posts', {
      headers: myHeaders,
      method: 'GET'
    }).then((response) => {
      if(!response.ok) {
        console.log("Network Error occured in fetch call");
        return {};
      }
      return response.json();
    }).then((data) => {
      for (const post of data['data']) {
        const {id, title} = post;
        this.setState((state) => {
          state.posts[id] = {
            id,
            title
          };
        });
      }
    });
  }

  render() {
    this.fetchPosts();
    console.log(this.state);
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
