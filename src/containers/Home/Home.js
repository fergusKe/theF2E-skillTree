import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SkillTree from '../../components/SkillTree';
import Dialog from '../../components/Dialog';

class Home extends Component {
  state = {
    info: null
  };
  showInfo = (skill) => {
    this.setState({
      info: skill
    });
  };
  render() {
    const { info } = this.state;
    console.log('info = ', info);
    return (
      <Router>
        <div>
          <SkillTree showInfo={this.showInfo} />
          {info && <Dialog {...info} />}
        </div>
      </Router>
    );
  }
}

export default Home;
