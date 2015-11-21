"use strict";

import Immutable from 'immutable';
import homeInitialState from './home/homeInitialState';

const home = Immutable.Map(homeInitialState);

export default {
  home
};
