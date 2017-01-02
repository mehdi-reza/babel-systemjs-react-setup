import React from 'react';

import {Square, Board, Game} from './board-game';
import {render} from 'react-dom';

render(<Game />,
	document.getElementById("game-root"));
