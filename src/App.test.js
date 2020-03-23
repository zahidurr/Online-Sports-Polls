import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import Dashboard from './components/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Jest Snapshot Testing
describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Signin - Dashboard', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Dashboard />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

