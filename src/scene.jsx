import React from 'react';
import { Welcome } from './welcome';

class Scene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.level) {
      case 0:
        return (<Welcome />);
      case 1:
        return (<Welcome />);
    }
  }
} 

export { Scene }