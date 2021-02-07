import React from 'react';
import { Welcome } from './levels/welcome';

class Scene extends React.Component {
  render() {
    switch (this.props.level) {
      case 0:
        return (<Welcome />);
      case 1:
        return (<Welcome />);
      default:
        return (<p>Uh..., this is a problem.</p>);
    }
  }
} 

export { Scene }