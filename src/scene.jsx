import React from 'react';
import { Welcome } from './levels/welcome';
import { Caesar } from './levels/caesar';

class Scene extends React.Component {
  render() {
    switch (this.props.level) {
      case 0:
        return (<Welcome />);
      case 1:
        return (<Caesar />);
      default:
        return (<p>Uh..., this is a problem.</p>);
    }
  }
} 

export { Scene }