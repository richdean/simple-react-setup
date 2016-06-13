import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from './app';

describe('Basic', () => {
  it('should be true', () => {
    expect(true).toEqual(true);
  });
});

describe('App component', () => {
  it('should render hello world', () => {
    const renderer = TestUtils.createRenderer();

    renderer.render(<App />);
    const actual = renderer.getRenderOutput();

    const expected = (
      <div>Hello World</div>
    );

    expect(actual).toEqual(expected);
  });
});
