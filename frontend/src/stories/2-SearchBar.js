import React, { Fragments } from 'react';

import { action } from '@storybook/addon-actions';

import SearchBar from '../components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Text = () => <SearchBar onChange={action('clicked')}></SearchBar>;
/*
export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>

);
*/