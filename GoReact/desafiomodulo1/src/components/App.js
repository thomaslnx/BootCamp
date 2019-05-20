import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        name: 'Marcos de Moura Silva',
        // avatar: path.resolve(__dirname, 'assets', 'images', 'marcos.png'),
        avatar: 'https://pt.seaicons.com/wp-content/uploads/2015/10/Male-Face-F5-icon.png',
        time: 'Há 15 min',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Joyce Talita',
        avatar: 'https://pt.seaicons.com/wp-content/uploads/2015/10/Female-Face-FC-2-icon.png',
        time: 'Há 10 min',
        content:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      },
      {
        name: 'Alícia de moura',
        avatar: 'https://pt.seaicons.com/wp-content/uploads/2015/10/Female-Face-FD-3-dark-icon.png',
        time: 'Há 3 min',
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        <div>{posts && posts.map(post => <Post data={post} />)}</div>
      </div>
    );
  }
}
