import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from "../App";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button className="test" onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯 ❄️
      </span>
    </Button>
  )
);

storiesOf('App', module).add('default', () => <App />);

storiesOf('Components with ignored region', module)
  .add(
    'Some story',
    () => 
      <div>
        <span>I am visually perfect!</span>
        <span className="ignore-this">this should be ignored</span>
      </div>,
    {eyes: { ignore: [{selector: '.ignore-this'}] }}
  )

