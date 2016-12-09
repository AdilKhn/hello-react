import React, { Component } from 'react';

class Item extends Component {
  render() {
    const list = ['apple', 'banana', 'mango' ,'orange'];

    return (
      <div className="Item">
        <ul>
            {list.map(function(item) {
              return <li> item </li>;
            })}
        </ul>
      </div>
    );
  }
}
export default Item;
