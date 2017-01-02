import React from 'react';
import {Button} from 'react-bootstrap';

export default class TestComponent extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram@</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <Button bsStyle="primary">Bootstrap Button</Button>
      </div>
    );
  }
}