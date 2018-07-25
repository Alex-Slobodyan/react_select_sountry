import './index.css';
import 'semantic-ui-css/semantic.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MenuExampleBasic from './component/menu.jsx';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Container } from 'semantic-ui-react';

import Home from './template/home.jsx';
import Varify from './template/varify.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <MenuExampleBasic />
        <Container className="content">
        {this.props.children}
        </Container>
      </div>
    )
  };
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route  path="/" component={App}>
      <IndexRoute component={Home} />
      <Link path="home" component={Home} />
      <Link path="varify" component={Varify} />
    </Route>
  </Router>,
  document.getElementById('root')
);
